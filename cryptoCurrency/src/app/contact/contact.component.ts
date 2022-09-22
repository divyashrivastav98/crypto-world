import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactServiceService } from './contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService : ContactServiceService) { }
  feedbackForm !: FormGroup;
  error !:string;
  success !:string;

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'feedback' : new FormControl('',[Validators.minLength(10),Validators.required])
    })
  }

  onSubmit(){
    this.contactService.saveFeedback(this.feedbackForm.value).subscribe(data=>{
    this.success = 'Your response was submitted successfully!'
    },error =>{
      this.error = 'Your response could not be saved. Please try again later.';
    });

    setTimeout(()=>{
      this.success = '';
      this.error = '';
    },6000)
  }

  onReset(){
    this.feedbackForm.reset();
    this.error = '';
    this.success = '';
 }
 
}
