import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION } from 'src/data/warmehaus/cab-20W.data';

@Component({
  selector: 'app-cab20-w',
  templateUrl: './cab20-w.component.html',
  styleUrls: ['./cab20-w.component.scss']
})
export class Cab20WComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

}
