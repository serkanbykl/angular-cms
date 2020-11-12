import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { AppModule } from '../app.module';
import { AccountService } from '../routes/pages/services/account.service';

@Injectable({
    providedIn: 'root'
  })

  export class JwtInterceptor implements HttpInterceptor{
      constructor (private acc : AccountService){

      }
      intercept(request : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> 
      {
          // add authorization header with jwt token if available
          let currentuser = this.acc.isLoggedIn;
          let token = localStorage.getItem('jwt');
  
          if (currentuser && token !== undefined) 
          {
              request = request.clone({
                  setHeaders: 
                  {
                       Authorization: `Bearer ${token}` 
                      
                  }
              });
          }
  
          return next.handle(request);
      }
  }