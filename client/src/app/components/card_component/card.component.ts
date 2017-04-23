import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})

export class CardComponent {
  @Input()
  imageSrc: string;
  @Input()
  title: string;
  @Input()
  tags: string[];
  @Input()
  description: string;
}
