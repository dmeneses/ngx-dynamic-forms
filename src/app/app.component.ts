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
    "type": "text",
    "defaultValue": "123"
  }]`;

  generateDynamicForm() {
    this.dynamicFormModel = JSON.parse(this.modelEditor);
  }
}
