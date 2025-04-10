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

  gameDevSkills?: any;
  webDevSkills?: any;

  selectedSkills?: String;

  constuctor() {
    this.loadData();

    this.selectedSkills = "any";

    let gSkills = [];
    let wSkills = [];

    for(let skill of this.hardSkills) {
      if(skill.type == "gameDev") { gSkills.push(skill) }
      else if(skill.type == "webDev") { wSkills.push(skill) }
    }

    this.gameDevSkills = gSkills;
    this.webDevSkills = wSkills;
  }

  async loadData() {
    const response = await fetch('./../../media/data/skills.json');
    const data = await response.json();
    
    this.hardSkills = data.hardSkills;
    this.softSkills = data.softSkills;
  }
}
