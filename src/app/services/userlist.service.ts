import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor() { }

  getUsers(){
    return axios.get('https://randomuser.me/api/?results=150')
  }
}
