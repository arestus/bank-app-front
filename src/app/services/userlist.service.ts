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
      let users = axios.get(environment.apiURL + '/Users')
    //   this.http.get<UserModel[]>(environment.apiURL + '/Users').toPromise();
      console.log(users, 'userservice')
    return users
}

getById(id: string) {
    return this.http.get<UserModel>(`${environment.apiURL + '/Users'}/${id}`).toPromise();
}

create(params: any) {
    return this.http.post(environment.apiURL + '/Users', params).toPromise();
}

update(id: string, params: any) {
    return this.http.put(`${environment.apiURL + '/Users'}/${id}`, params).toPromise();
}

delete(id: string) {
    return this.http.delete(`${environment.apiURL + '/Users'}/${id}`).toPromise();
}
  
}
