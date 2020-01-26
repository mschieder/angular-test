import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {SharedModule} from 'primeng/primeng'
import { DummyVermerkService, VermerkService, DefaultVermerkService } from './vermerk.service';
import { Car } from './model/Car';
import { Vermerk } from './model/vermerk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /*
  providers: [
     { provide: VermerkService, useClass: DummyVermerkService }
  ]
*/
  providers: [
    { provide: VermerkService, useClass: DefaultVermerkService }
 ]
})
export class AppComponent implements OnInit{
  cars: Array<Car> = [];
  vermerke: Array<Vermerk> = [];
  title = 'table-app';

  columns: [
         {field: 'id', header: 'id'},
         {field: 'rechtstraegerId', header: 'rechtstraegerId'},
         {field: 'rechtstraegerName', header: 'rechtstraegerName'},
         {field: 'beschreibung', header: 'beschreibung'}
      ];
 

  constructor(private vermerkService: VermerkService) { 
   
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.vermerke);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}


  ngOnInit() {
 
    this.vermerkService.find('x', 'y').subscribe(
      cars => {
        this.cars = cars;
      },
      err => {
        console.error('err', err);
      }
    );
    
    this.vermerkService.findVermerke('x', 'y').subscribe(
      vermerke => {
        this.vermerke = vermerke;
      },
      err => {
        console.error('err', err);
      }
    );
    }
}
