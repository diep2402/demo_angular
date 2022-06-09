import { Injectable } from '@angular/core';
import { Status } from '../model/status.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  createStatus(data: any) {
    console.log(data);

    return this.http.post<any>('http://localhost:3001/Management', data)
      .pipe(map((res: any) => {
        console.log(res, "data add");
        return res
      }))
  }

  getStatus() {
    return this.http.get<any>('http://localhost:3001/Management')
      .pipe(map((res: any) => {
        return res
      }))
  }

  deleteStatus(id: any) {

    return this.http.delete<any>('http://localhost:3001/Management/?_id=' + id)
      .pipe(map((res: any) => {
        return res
      }))
  }

  updateStatus(data: any) {
    console.log(data, "data fetch");

    return this.http.put<any>('http://localhost:3001/Management/?_id=' + data.id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }

  updateManyStatus(data: any) {
    console.log(data);

    return this.http.put<any>('http://localhost:3001/Management/UpdateMany', data)
      .pipe(map((res: any) => {
        return res
      }))
  }
}
