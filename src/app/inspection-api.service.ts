import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  readonly inspectionAPIUrl = 'https://localhost:7100/api';

  constructor(private http: HttpClient) {}

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/Inspections', data);
  }
  updateInspection(id: string | number, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/Inspections/${id}`, data);
  }
  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/Inspections/${id}`);
  }
  //

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/InspectionTypes', data);
  }
  updateInspectionTypes(id: string | number, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/InspectionTypes/${id}`, data);
  }
  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/InspectionTypes/${id}`);
  }

  //
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Status');
  }
  addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/Status', data);
  }
  updateStatus(id: string | number, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/Status/${id}`, data);
  }
  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/Status/${id}`);
  }

}
