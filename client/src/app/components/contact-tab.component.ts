import { Component } from '@angular/core';

@Component({
  selector: 'contact-tab',
  template: `<h1>Hello {{name}}</h1>`,
})

export class ContactTabComponent  { name = 'from contact'; }
