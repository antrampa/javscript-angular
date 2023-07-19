import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form #myForm="ngForm" (submit)="submitForm()">
      <label for="name">Name:</label>
      <input type="text" name="name" ngModel />

      <button type="submit">Submit</button>
    </form>
  `,
})
export class FormComponent {
  @ViewChild('myForm', { static: true }) myForm!: NgForm;

  submitForm() {
    if (this.myForm.valid) {
      // Send the form data to the opener window
      if (window.opener) {
        window.opener.receiveFormData(this.myForm.value);
      }
    }
  }
}
