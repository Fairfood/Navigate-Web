import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly auth = inject(AuthService);
  ngOnInit(): void {
    // if a localstorage item is deleted event.key will be empty
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage && event.key === null) {
        const token = localStorage.getItem('isNavigateUserLoggedIn');
        if (!token) {
          // Refresh after 4 second
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        }
      }
    });

    setInterval(() => {
      this.checkUserLoginStatus();
    }, 5000); 
  }


  isUserLoggedIn(): boolean {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'isFairfoodUserLoggedIn' && value) {
        return true;
      }
    }
    return false;
  }
  
  // Handle logout if user logs out from the first app
  checkUserLoginStatus(): void {
    if (!this.isUserLoggedIn()) {
      this.auth.removeUserData();
    }
  }
  
}
