import { Component } from '@angular/core';
import { CsvExportService } from '../csv-export.service';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent {

  constructor(private csvExportService: CsvExportService) { }

  download() {
    // in development
    // const csvUrl = 'http://127.0.0.1:8000/api/studentgradesapp/export-csv/';
    // in production
    const csvUrl = 'http://47.94.96.123/api/studentgradesapp/export-csv/';
    this.csvExportService.downloadCsv(csvUrl).subscribe((blob: Blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'export.csv';
      a.click();
      URL.revokeObjectURL(objectUrl);
    },
      error => {
        console.error('Download failed', error);
      }
    );
  }
}
