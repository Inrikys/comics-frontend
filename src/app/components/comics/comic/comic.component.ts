import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../../interfaces/comics/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic!: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
