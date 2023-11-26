import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {
  constructor(private http: HttpClient) { }

  downloadCsv(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
