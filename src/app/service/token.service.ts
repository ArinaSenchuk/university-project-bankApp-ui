import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = '';

  get token() {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }
}
