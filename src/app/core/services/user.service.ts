import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';
import { UserModel } from '../models';
import { USER_TYPE } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    username: 'GUEST',
    userType: USER_TYPE.GUEST
  } as UserModel;

  constructor(private http: HttpClient, private config: Config) {
    console.log('UserService')
  }

}
