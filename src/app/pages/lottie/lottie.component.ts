import { AnimationOptions } from 'ngx-lottie'
import { Component } from '@angular/core'
import { AnimationConfigWithPath, AnimationItem, SVGRendererConfig } from 'lottie-web'
@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss'],
})
export class LottieComponent {

  displayedLottiePlayer: Partial<AnimationConfigWithPath> = {
    path: null,
    autoplay: true,
    loop: true,
  }

  lottiePlayerUrls = [
    'https://assets6.lottiefiles.com/packages/lf20_ukjcyybw.json',
  ]

  constructor() {
    const randomNumber = Math.floor(Math.random() * this.lottiePlayerUrls.length)
    this.displayedLottiePlayer.path = this.lottiePlayerUrls[randomNumber]
    console.log(this.displayedLottiePlayer)
  }

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem)
  }
  
}
