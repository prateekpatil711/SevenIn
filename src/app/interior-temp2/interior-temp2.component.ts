import { Component, OnInit } from '@angular/core';
import { Imageslider } from './interior-temp2.interface';
import { trigger, transition, useAnimation } from "@angular/animations";
import { 
  AnimationType, 
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut } from './interior-temp2.animations';


@Component({
  selector: 'app-interior-temp2',
  templateUrl: './interior-temp2.component.html',
  styleUrls: ['./interior-temp2.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      /*
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),
      */


      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      /*
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),
      */
      /* JackInTheBox */
      /*
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
      */
    ])]

})
export class InteriorTemp2Component implements OnInit {

  animationType = AnimationType.Fade;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ]

  BedroomInterior: Imageslider[] = [
    {
      src:"../../assets/A1.jpg"
    },
    {
      src:"../../assets/L4.jpg"
    },
    {
      src:"../../assets/L2.jpg"
    },
    {
      src:"../../assets/L3.jpg"
    },
    {
      src:"../../assets/L1.jpg"
    }
  ]
  LoungeInterior: Imageslider[] = [
    {
      src:"../../assets/B9.jpg"
    },
    {
      src:"../../assets/B1.jpg"
    },
    {
      src:"../../assets/B10.png"
    },
    {
      src:"../../assets/B2.jpg"
    },
    {
      src:"../../assets/B7.jpg"
    },
    {
      src:"../../assets/B4.jpg"
    },
    {
      src:"../../assets/B5.jpg"
    },
    {
      src:"../../assets/B6.jpg"
    }
  ]
  BathroomInterior: Imageslider[] = [
    {
      src:"../../assets/W9.jpg"
    },
    {
      src:"../../assets/B12.jpg"
    },
    {
      src:"../../assets/W6.jpg"
    },
    {
      src:"../../assets/W1.jpg"
    },
    {
      src:"../../assets/B8.jpg"
    },
    {
      src:"../../assets/W7.png"
    }
  ]

  currentSlide1 = 0;
  currentSlide2 = 0;
  currentSlide3 = 0;

  constructor() { }

  ngOnInit(): void {
    //this.preloadImages(); // for the demo
  }

  /*
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? 2 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }
  */

  onNextClick1() {
    const next = this.currentSlide1 + 1;
    this.currentSlide1 = next > 4 ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide1);
  }
  onNextClick2() {
    const next = this.currentSlide2 + 1;
    this.currentSlide2 = next > 7 ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide2);
  }
  onNextClick3() {
    const next = this.currentSlide3 + 1;
    this.currentSlide3 = next > 5 ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide3);
  }

  /*preloadImages() {
    for (const slide of this.BedroomInterior) {
      new Image().src = slide.src;
    }
  }*/

}
