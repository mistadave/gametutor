import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public static U_NAME: string = 'userName';
  public static U_LASTNAME: string = 'userLastname';
  public static U_JWT: string = 'userJWT';

  private _myData$ = new BehaviorSubject<any>(null)
  public myData$ = this._myData$.asObservable()

  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
   }

  public setItem(key: string, value: string): void {
    const jsonData = JSON.stringify(value);
    this._localStorage.setItem(key, jsonData);
    this._myData$.next(value);
  }

  public getItem(key: string): any | null {
    // check using json
    let val = this._localStorage.getItem(key)
    if (val != null){
      val = JSON.parse(val);
    }
    this._myData$.next(val);
    return val;
    
    // return localStorage.getItem(key);
  }

  public removeItem(key: string): void {
    this._localStorage.removeItem(key);
    this._myData$.next(null);
  }

  public clear(): void {
    this._localStorage.clear();
    this._myData$.next(null);
  }
}
