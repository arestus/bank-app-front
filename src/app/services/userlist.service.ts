import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})


export class UserlistService {
  

  formDate : UserModel = new UserModel();

  list!: UserModel[];

  constructor(private http: HttpClient) { }

  getAll() {
      let users = axios.get(environment.apiURL + '/Customer')
    //   this.http.get<UserModel[]>(environment.apiURL + '/Users').toPromise();
      // console.log(users, 'userservice')
    return users
}

getById(id: string) {
    return this.http.get<UserModel>(`${environment.apiURL + '/Customer'}/${id}`).toPromise();
}

create(params: UserModel) {
    return this.http.post(environment.apiURL + '/Customer', params).toPromise();
}

update(id: string, params: any) {
    return this.http.put(`${environment.apiURL + '/Customer'}/${id}`, params).toPromise();
}

delete(id: string) {
    return this.http.delete(`${environment.apiURL + '/Customer'}/${id}`).toPromise();
}
  
}
