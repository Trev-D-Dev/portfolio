import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './../../styles.css']
})
export class ProjectsComponent {

  projects?: any;

  constructor() {
    this.loadData();
  }

  /**
   * Function that loads the data from the JSON file
   */
  async loadData() {
    const response = await fetch('./../../media/data/projects.json');
    const data = await response.json();
    this.projects = data.projects;
  }

  goToPage(link: any) {
    window.open(link, '_blank');
  }
}
