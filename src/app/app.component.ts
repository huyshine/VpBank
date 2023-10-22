import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]
})
export class AppComponent {
  title = 'VpBank';
  status = false;
  showQuestionContent = (e: any, index: number) => {
    const ques = document.querySelectorAll('.question-item-content-wrap');
    const ques_title = document.querySelectorAll('.question-item-header');
    for (let i = 0; i < ques.length; i++) {
      if(i!=index){
        ques[i].classList.add('hidden');
      }
    }
    ques[index].classList.toggle('hidden');

    ques_title[index].classList.toggle('border-b');
  };
  showQuestion = () => {
    console.log(this.myNumber);
    const ques = document.querySelectorAll('.question-item');
    for (let i = 5; i < 10; i++) {
      ques[i].classList.toggle('hidden');
    }
    const btn_ques = document.querySelector('.btn-ques');
    btn_ques?.classList.toggle('hidden');
  };

  customOptions: OwlOptions = {
    dots: true,
    nav: true,
    center: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      }
    },
  };
  myNumber: any;

}
