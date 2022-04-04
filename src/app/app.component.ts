import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Candidate, GetJsonService } from './get-json.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{

  constructor(private getJsonService: GetJsonService){}

  dataSource = new MatTableDataSource(this.getJsonService.getJsonData());
  columnDefaults: string[] = ['S_No', 'First_Name', 'Last_Name', 'Address', 'City', 'Zip_Code',
  'Contact_No', 'Email_Address', 'Qualifications', 'HandsOn_Experience', 'Hobbies', 'Remarks'];
  displayedColumns: string[] = this.columnDefaults;
  hiddenColumn: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  @ViewChild('searchInput') searchInput: ElementRef;

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }

  search(){
    // get searched string and apply filter through it
    this.dataSource.filter = this.searchInput.nativeElement.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch(){
    // clear search input and filter
    this.searchInput.nativeElement.value = "";
    this.dataSource.filter = "";
  }

  filterData(columnName: keyof Candidate){
    // create deep copy so we still have og data to return to on reset
    var data = JSON.parse(JSON.stringify(this.dataSource.data));
      data.forEach(element=>{
        delete element[columnName]
      });
    return data;
  }

  hideColumn(columnName: string){
    this.hiddenColumn = true;

    // only keep columns that aren't equal to one to hide
    this.displayedColumns = this.displayedColumns.filter(item => item != columnName);

    var columnKey = columnName as keyof Candidate;
    this.dataSource.data = this.filterData(columnKey);
  }

  reset(){
    // bring back hidden columns and popular w/ complete dataset
    this.displayedColumns = this.columnDefaults;
    this.hiddenColumn = false;
    this.dataSource.data = this.getJsonService.getJsonData();
  }
}
