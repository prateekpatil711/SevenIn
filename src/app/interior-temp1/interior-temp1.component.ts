import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';
import { Imageslider } from './interior-temp1.interface';
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
  jackOut } from './Interior-temp1.animations';


@Component({
  selector: 'app-interior-temp1',
  templateUrl: './interior-temp1.component.html',
  styleUrls: ['./interior-temp1.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),
    ])]
})
export class InteriorTemp1Component implements OnInit {

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    }
  ]

  imageSlider: Imageslider[] = [
    {
      src:"../../assets/C1.jpg"
    },
    {
      src:"../../assets/B1.jpg"
    },
    {
      src:"../../assets/D1.jpg"
    }
  ]

  constructor() {}

  ngOnInit(): void {
    //this.preloadImages(); // for the demo
  }

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? 2 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next > 2 ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  /*preloadImages() {
    for (const slide of this.imageSlider) {
      new Image().src = slide.src;
    }
  }*/

}
