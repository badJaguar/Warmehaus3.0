import { Component, OnInit, Inject } from '@angular/core';
import { CanonicalService } from '../../../services/canonical.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  constructor(private metaService: CanonicalService) {
  }

  ngOnInit() {
    this.metaService.createCanonicalURL();
  }
  onTabMenu() {
    document.getElementById('tabMenu').scrollIntoView();
  }
}
