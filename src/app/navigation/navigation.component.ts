import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', './../../styles.css']
})
export class NavigationComponent {
  constructor(private location: Location) {
  }

  buttons = [
    "About",
    "Projects",
    "Skills",
    "History",
    "Resume",    
  ];

  currentPage?: String;

  /**
   * Retrieves the current path and saves it to currentPage
   */
  ngOnInit(): void {
    this.currentPage = this.location.path().slice(1);
  }

  /**
   * Opens the specified file in a new window (used for resume button)
   */
  openFile() {
    window.open('/../media/background.jpg', '_blank');
  }

  /**
   * Changes which button is selected, reactivating the previous one
   * @param event the event that was triggered
   */
  changeSelected(event: any): void {
    const currentButton = event.currentTarget;
    const priorButton = document.querySelector('button.selected');

    this.currentPage = currentButton.innerHTML;

    priorButton?.setAttribute('class', 'nav-button');
    priorButton?.removeAttribute('disabled');

    currentButton.setAttribute('class', 'nav-button selected');
    currentButton.disabled = true;
  }
}