import { Component } from '@angular/core';
import { ExcelService } from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  data1 = [
    {
      name: 'data1', //sheet1 with name data1
      values: [
        { header: 'eid', value: '' },
        {
          header: 'test',
          value: [
            { name: 'test1' },
            { name: 'test2' },
            { name: 'test3' },
            { name: 'test4' },
            { name: 'test5' },
            { name: 'test6' },
            { name: 'test7' },
            { name: 'test8' },
            { name: 'test9' },
            { name: 'test10' },
            { name: 'test11' },
            { name: 'test12' },
            { name: 'test13' },
            { name: 'test14' },
            { name: 'test15' },
            { name: 'test16' },
            { name: 'test17' },
            { name: 'test18' },
            { name: 'test19' },
            { name: 'test20' },
            { name: 'test21' },
            { name: 'test22' },
            { name: 'test23' },
            { name: 'test24' },
            { name: 'test25' },
            { name: 'test26' },
            { name: 'test27' },
            { name: 'test28' },
            { name: 'test29' },
            { name: 'test30' },
            { name: 'test31' },
            { name: 'test32' },
            { name: 'test33' },
            { name: 'test34' },
            { name: 'test35' },
            { name: 'test36' },
            { name: 'test37' },
            { name: 'test38' },
            // { name: 'test39' },
            // { name: 'test40' }
          ],
        },
        { header: 'ename', value: '' },
        { header: 'esal', value: [{ name: 'val' }, { name: 'val1' }] },
      ],
    },
  ];

  data2 = this.transform(this.data1);

  transform(data) {
    const noOfRowaToGenerate = 500;
    return data.map(({ name, values }) => {
      const headers = values.reduce(
        (prev, next) => ({
          ...prev,
          [next.header]: Array.isArray(next.value)
            ? next.value.map(({ name }) => name)
            : next.value,
        }),
        {}
      );
      return {
        workSheet: name,
        rows: Array(noOfRowaToGenerate).fill(headers),
      };
    });
  }
  workbookData = this.transform(this.data1);
  // workbookData = [
  //   {
  //     workSheet: "data 1",
  //     rows: [
  //       { eid: "1", ename: "John", esal: ["val 1", "val2", "val 3"] },
  //       { eid: "4", ename: "Parker", esal: ["val 1", "val2", "val 3"] },
  //       { eid: "5", ename: "Iron", esal: ["val 1", "val2", "val 3"] }
  //     ]
  //   },
  //   {
  //     workSheet: "data 2",
  //     rows: [
  //       { eid: "9", ename: "Doe", esal: ["val 1", "val2", "val 3"] },
  //       { eid: "10", ename: "Peter", esal: ["val 1", "val2", "val 3"] },
  //       { eid: "11", ename: "Man", esal: ["val 1", "val2", "val 3"] }
  //     ]
  //   }
  // ];
  constructor(private excelService: ExcelService) {}
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.workbookData, 'sample');
  }
}
