import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  darkModeEnabled: boolean = false;

  toggleDarkMode() {
    // Implement logic to enable or disable dark mode
    if (this.darkModeEnabled) {
      // Apply dark mode styles or theme
      document.body.classList.add('dark-theme');
    } else {
      // Remove dark mode styles or theme
      document.body.classList.remove('dark-theme');
    }
  }

}
