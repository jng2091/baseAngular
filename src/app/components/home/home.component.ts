import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enableDoctor = false;
  enablePdf = false;
  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }


}


