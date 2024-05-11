import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".input");

    const addFocusClass = function (this: HTMLInputElement): void {
      const parent = this.parentNode?.parentNode as HTMLElement;
      if (parent) {
        parent.classList.add("focus");
      }
    };

    const removeFocusClass = function (this: HTMLInputElement): void {
      const parent = this.parentNode?.parentNode as HTMLElement;
      if (parent && this.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", addFocusClass);
      input.addEventListener("blur", removeFocusClass);
    });
  }
}
