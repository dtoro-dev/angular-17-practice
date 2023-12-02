import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'game-list',
  standalone: true,
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';;
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Puzzle',
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3,
      name: 'Puzzle',
    },
  ]
}
