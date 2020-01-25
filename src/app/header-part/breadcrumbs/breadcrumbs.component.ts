import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbRoutesService } from '../../../services/breadcrumb-routes.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  name: string;
  breadcrumbs: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private router: Router, private breadcrSrc: BreadcrumbRoutesService, private titleService: Title) { }

  ngOnInit() {
    this.breadcrumbs = this.breadcrSrc.getMenu();
    this.listenRouting();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  listenRouting() {
    let routerUrl: string;
    let routerList: Array<any>;
    let target: any;

    this.router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.breadcrumbs;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        // tslint:disable-next-line:no-shadowed-variable
        routerList.forEach((router, index) => {

          target = target.find(page => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
          });

          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        // console.log(this.breadcrumbList);
      }
    });
  }


}
