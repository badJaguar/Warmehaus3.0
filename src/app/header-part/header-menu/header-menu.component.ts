import { PhonesSheetComponent } from '../../footer-part/phones-sheet/phones-sheet.component';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  @ViewChild('navBurger', { static: true }) navBurger: ElementRef;
  @ViewChild('navMenu', { static: true }) navMenu: ElementRef;

  brand = 'assets/images/logo2.png';
  mouseOn = true;

  constructor(private bottomSheet: MatBottomSheet, private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(PhonesSheetComponent);
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  toggledBoxedItemToFalse() {
    this.mouseOn = !this.mouseOn;
  }
  toggledBoxedItemToTrue() {
    this.mouseOn = true;
  }
  ngOnInit(): void {
  }
}
