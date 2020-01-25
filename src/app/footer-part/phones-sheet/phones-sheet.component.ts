import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-phones-sheet',
  templateUrl: './phones-sheet.component.html',
  styleUrls: ['./phones-sheet.component.scss']
})
export class PhonesSheetComponent implements OnInit {
  mobile: boolean;
  disableClose: boolean | undefined;

  constructor(private bottomSheetRef: MatBottomSheetRef<PhonesSheetComponent>) { }
  // This function prohibits to close window. Allows to close it by click outside the window.
  // @HostListener('window:keyup.esc') onKeyUp() {
  //   this.bottomSheetRef.dismiss();
  // }
  openLink(): void {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
    if (window.screen.width < 1024) {
      this.mobile = true;
    }
  }
}
