import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;

  public users;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getUsers().subscribe((usersSnapshot) => {
      this.users = [];
      usersSnapshot.forEach((catData: any) => {
        this.users.push( catData.payload.doc.data()
          // {
          // id: catData.payload.doc.id,
          // data: catData.payload.doc.data()
        // }
        );
      })
    });
  }

  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Resultados');
    XLSX.writeFile(wb, 'estudaintes.xlsx');  
  }  

}
