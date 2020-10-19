import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  listDisplaySubject = new BehaviorSubject<{ isDisplay: boolean }>({ isDisplay: false });
  listDisplay$ = this.listDisplaySubject.asObservable();

  constructor() {

  }

}
