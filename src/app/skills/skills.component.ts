import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', './../../styles.css']
})
export class SkillsComponent {

  hardSkills?: any;
  softSkills?: any;

  gameSkills?: any;
  webSkills?: any;

  selectedSkills?: String;

  constructor() {

    if(!this.hardSkills) {
      this.loadData();
    }

    this.selectedSkills = "all";
  }

  /**
   * Function for loading in the data from the JSON file
   * Filters the hard skills to their respective arrays
   */
  async loadData() {
    const response = await fetch('./../../media/data/skills.json');
    const data = await response.json();
    
    this.hardSkills = data.hardSkills;
    this.softSkills = data.softSkills;


    this.gameSkills = [];
    this.webSkills = [];

    for(let skill of this.hardSkills) {
      if(skill.type == "gameDev") { this.gameSkills.push(skill) }
      else if(skill.type == "webDev") { this.webSkills.push(skill) }
    }
  }

  /**
   * Function that switches which filter button is selected/disabled
   * Changes the selectedSkills variable based on the new button's id
   * @param event the event that triggered the function call
   */
  changeSelected(event: any): void {

    const currentButton = event.currentTarget;
    const priorButton = document.querySelector('button.filter-button.selected');

    this.selectedSkills = currentButton?.id;

    priorButton?.setAttribute('class', 'filter-button');
    priorButton?.removeAttribute('disabled');

    currentButton.setAttribute('class', 'filter-button selected');
    currentButton.disabled = true;
  }
}
