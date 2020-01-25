import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { WINDOW } from '@ng-toolkit/universal';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title: string = this.titleService.getTitle();
  private metaDescription: string = this.metaService.getTag('name=description').content;
  cookieValue = 'SameSite=None';

  constructor(@Inject(WINDOW) private window: any,
    private swUpdate: SwUpdate,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private cookieService: CookieService,
  ) {
  }
  ngOnInit() {
    this.cookieService.set('/', '/', 30, 'None', 'None', true, 'None');
    this.cookieValue = this.cookieService.get('/');

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const snapshot: ActivatedRouteSnapshot = this.router.routerState.snapshot.root.firstChild;

      const title: string = snapshot.data.title;
      this.titleService.setTitle(this.title + ' | ' + title);

      const description: string = snapshot.data.description;
      this.metaService.updateTag({ name: 'description', content: this.metaDescription + ' ' + description }, 'name=description');
      this.window.scrollTo(0, 0);
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((evt) => {
        console.log('service worker updated');
      });

      this.swUpdate.checkForUpdate().then(() => {
        // noop
      }).catch((err) => {
        console.error('error when checking for update', err);
      });
    }
  }
}
