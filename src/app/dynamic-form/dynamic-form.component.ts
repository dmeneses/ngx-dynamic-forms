import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {

  @Input() model;

  constructor() { }

  isInputType(type) {
    return INPUT_TYPES.find((availableType => type === availableType));
  }

  test() {
    /*console.log(this.dynamicFieldReference);
    Object.assign(this.dynamicFieldReference.nativeElement, this.model[0].attributes);*/
  }

}

export const INPUT_TYPES = [
  'text',
  'password',
  'range',
  'color',
  'number',
  'email'
  /*	
  button
  checkbox
  color
  date 
  datetime-local 
  email 
  file
  hidden
  image
  month 
  number 
  password
  radio
  range 
  reset
  search
  submit
  tel
  text
  time 
  url
  week 
  */
]