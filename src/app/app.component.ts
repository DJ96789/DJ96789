import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'LearnLink';
  notifications:number = 0;
  showSpinner:boolean = false;
  selectedValue1:string = "";
  selectedValue2:string = "";
  selectedValue3:string = "";
  selectedValue4:string = "";
  autocompleteOptions:string[] = ['Angular', 'React', 'View'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'},
  ];


  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  displayFn(subject:any) {
    return subject ? subject.name : undefined;
  }

}
