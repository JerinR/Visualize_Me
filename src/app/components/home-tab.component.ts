import { Component } from '@angular/core';

import { Card } from './card_component/card.interface'

import { HomeService } from '../services/home.service';

@Component({
  // moduleId: module.id,
  selector: 'home-tab',
  templateUrl: 'home-tab.component.html',
  providers: [ HomeService ]
})

export class HomeTabComponent  {
  name = 'from home';
  cards: Card[];

  constructor(private homeService: HomeService) {
    // this.cards =
    this.homeService.getAllCardData().subscribe(data => {
      this.cards = [];
      for (var i = 0; i < data.length; ++i) {
        var cardData = {
          // TODO insert docs in mongo with imageSrc
          imageSrc: '../assets/img/bfs-sample-for-mock.png',
          title: data[i].name,
          tags: data[i].tags,
          description: data[i].description
        };
        this.cards.push(cardData);
      }

      for (var i = 0; i < 10; ++i)
        this.cards.push(this.cards[this.cards.length - 1]);
    });

    // this.cards = [
    //   {
    //     imageSrc: 'https://r.lvmh-static.com/uploads/2014/09/dfs-logo-400x150px.png',
    //     title: 'DFS',
    //     tags: ['Linear', 'algorithm'],
    //     description: 'Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs Depth first search for undirected and directed graphs'
    //   },
    //   {
    //     imageSrc: 'https://r.lvmh-static.com/uploads/2014/09/dfs-logo-400x150px.png',
    //     title: 'BFS',
    //     tags: ['Linear', 'algorithm'],
    //     description: 'Breadth first search for undirected and directed graphs'
    //   }
    // ];
    // for (var i = 0; i < 10; ++i)
    //   this.cards.push(this.cards[this.cards.length - 1]);
  }

}
