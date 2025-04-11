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

  /**
   * 
   * @param event the event that triggered the function call
   */
  showDetails(event: any): void {

    const clickedProject = event.currentTarget;
    const details = clickedProject.querySelector(".project-details");

    //Determines if project is visible and sets attributes accordingly
    if(!details.hidden) {
      details.hidden = true;
      clickedProject.setAttribute('class', 'project');
      return;
    }

    //Checks if any projects are already selected, if one is it is unselected
    if(document.querySelectorAll('.project.selected').length != 0) {
      const selectedProject = document.querySelector('.project.selected');
      selectedProject?.setAttribute('class', 'project');

      const details = selectedProject?.querySelector('.project-details');
      details?.setAttribute('hidden', 'true');
    }

    //Changes hidden and class attributes
    details.hidden = false;
    clickedProject.setAttribute('class', 'project selected');
  }
}
