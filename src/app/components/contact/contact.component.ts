import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsForm!: FormGroup;
  message: string;
  isSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    })
  }


  onSubmit() {
    console.log(this.contactUsForm);
    console.log(this.contactUsForm.value);
    alert(
      "Full Name: " + this.contactUsForm.value.fullName + "\n" +
      "Email: " + this.contactUsForm.value.email + "\n" +
      "Message: " + this.contactUsForm.value.message
      );
    this.contactUsForm.reset();
    this.isSubmitted = true;
    this.message = "Thank you for submitting!";
    setTimeout(() => {this.isSubmitted = false;}, 4000)
  }
}
