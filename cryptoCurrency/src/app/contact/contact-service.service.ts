import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http : HttpClient) { }

  saveFeedback(form:FormGroup){
    return this.http.post('https://cryptoworld-52a36-default-rtdb.firebaseio.com/feedback.json',form)
  }
}
