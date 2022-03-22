import { StudentService } from 'src/app/Services/Student/student.service';
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { StudentResult } from '../../Interfaces/StudentResult';

@Component({
  selector: 'app-student-slider',
  templateUrl: './student-slider.component.html',
  styleUrls: ['./student-slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class StudentSliderComponent implements OnInit {
  sliderArray: [
    {'img': string, 'alt': string, 'text': string }
  ];//StudentResult[];
  transform: number;
  selectedIndex = 0;
  constructor(private data: StudentService) {
    console.log("Student slider constructor")

    this.sliderArray = [{'img': "", 'alt': "", 'text': "" }];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    console.log("Got to student slider ngOnInit()!")

    this.data.getData().subscribe((result: StudentResult) => {
      this.sliderArray = result.sliderArray;
      console.log("Got data ngOnInit()!", result );
      console.log("this.sliderArray", this.sliderArray);
    });
  }

  selected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i: number) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }

}
