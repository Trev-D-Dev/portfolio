import { Component } from '@angular/core';

@Component({
  selector: 'history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css', './../../styles.css']
})
export class HistoryComponent {

  history?: any;

  constructor() {
    this.loadData();
  }

  /**
   * Loads data from the JSON file
   */
  async loadData() {
    const response = await fetch('./../../media/data/history.json');
    const data = await response.json();
    this.history = data.history;
  }
}