import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Form Generator';
  dynamicFormModel;
  modelEditor = `[{
    "type": "email",
    "label": "Email",
    "attributes": {
      "placeholder": "email@domain.com"
    }
  },{
    "type": "password",
    "label": "Password",
    "attributes": {
      "placeholder": "Enter Password"
    }
  },{
    "type": "password",
    "label": "Repeat Password",
    "attributes": {
      "placeholder": "Repeat Password"
    }
  },{
    "type": "textarea",
    "label": "Personal Description",
    "attributes": {
      "placeholder": "Some words about you..."
    }
  },{
    "type": "select",
    "label": "Select your position",
    "value": 3,
    "attributes": {},
    "options": [
      {
        "name": "junior dev",
        "value": 3
      },
      {
        "name": "staff dev",
        "value": 2
      },
      {
        "name": "senior dev",
        "value": 1
      }
    ]
  }]`;

  generateDynamicForm() {
    this.dynamicFormModel = JSON.parse(this.modelEditor);
  }
}
