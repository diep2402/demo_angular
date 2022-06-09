import { Injectable } from '@angular/core';
import { Status } from '../model/status.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  createUser(data: any) {
    console.log(data);

    return this.http.post<any>('http://localhost:3001/Staff', data)
      .pipe(map((res: any) => {
        console.log(res, "data add");

        return res
      }))
  }

  getUser() {
    return this.http.get<any>('http://localhost:3001/Staff')
      .pipe(map((res: any) => {
        console.log(res);

        return res
      }))
  }

  deleteUser(id: any) {

    return this.http.delete<any>('http://localhost:3001/Staff/?_id=' + id)
      .pipe(map((res: any) => {
        return res
      }))
  }

  updateUser(data: any) {
    console.log(data, "data fetch");

    return this.http.put<any>('http://localhost:3001/Staff/?_id=' + data.id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }

}
