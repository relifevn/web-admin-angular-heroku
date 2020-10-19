import { CommonModule } from '@angular/common'
import { LottieComponent } from './lottie.component'
import { NgModule } from '@angular/core'
import { SocketService } from 'src/app/core/services'
import { LottieModule } from 'ngx-lottie'
import player from 'lottie-web'

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player
}

@NgModule({
  declarations: [
    LottieComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    LottieComponent,
  ],
})
export class LottieAppModule { }
