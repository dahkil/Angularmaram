import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;  /* Référence au conteneur principal */
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;  /* Référence au bouton "Sign up" */
  @ViewChild('signInBtn') signInBtn!: ElementRef;  /* Référence au bouton "Sign in" */
  @ViewChild('password-input') passwordInput!: ElementRef;  /* Référence au champ de mot de passe */
  @ViewChild('toggle-password-btn') togglePasswordBtn!: ElementRef;  /* Référence au bouton de basculement */


  ngAfterViewInit() {
    if (this.signUpBtn && this.container) {
      this.signUpBtn.nativeElement.addEventListener('click', () => {
        this.container.nativeElement.classList.add('sign-up-mode');  /* Ajoute la classe pour la transition */
      });
    }

    if (this.signInBtn && this.container) {
      this.signInBtn.nativeElement.addEventListener('click', () => {
        this.container.nativeElement.classList.remove('sign-up-mode');  /* Retire la classe pour revenir au formulaire de connexion */
      });
    }
    


    
  }
  
}