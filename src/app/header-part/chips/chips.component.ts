import { Component, OnInit } from '@angular/core';
import { BreadcrumbRoutesService } from '../../../services/breadcrumb-routes.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})

export class ChipsComponent implements OnInit {
  list: Array<any> = [];
  constructor(private menuService: BreadcrumbRoutesService) { }

  ngOnInit() {
    this.list = this.menuService
      .getMenu()[1].children;
  }
}
