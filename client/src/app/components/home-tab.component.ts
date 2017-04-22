import { Component } from '@angular/core';

import { Card } from './card_component/card.interface'

@Component({
  moduleId: module.id,
  selector: 'home-tab',
  templateUrl: 'home-tab.component.html',
})

export class HomeTabComponent  {
  name = 'from home';
  cards: Card[];

  constructor() {
    this.cards = [
      {
        imageSrc: 'https://r.lvmh-static.com/uploads/2014/09/dfs-logo-400x150px.png',
        title: 'DFS',
        subtitle: 'Linear algorithm',
        description: 'Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs'
      },
      {
        imageSrc: 'https://r.lvmh-static.com/uploads/2014/09/dfs-logo-400x150px.png',
        title: 'BFS',
        subtitle: 'Linear algorithm',
        description: 'Breadth first search for undirected and directed graphs'
      }
    ];
    for (var i = 0; i < 10; ++i)
      this.cards.push(this.cards[this.cards.length - 1]);
  }

}
