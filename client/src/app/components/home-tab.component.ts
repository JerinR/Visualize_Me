import { Component } from '@angular/core';

@Component({
  selector: 'home-tab',
  template: `<h1>Hello {{name}}</h1>`,
})

export class HomeTabComponent  { name = 'from home'; }
