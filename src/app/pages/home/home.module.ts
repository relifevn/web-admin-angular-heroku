import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { SocketService } from 'src/app/core/services'

import { LottieAppModule } from '../lottie/lottie.module'
import { HomeComponent } from './home.component'

@NgModule({
	declarations: [HomeComponent],
	providers: [SocketService],
	imports: [
		RouterModule.forChild([{ path: '', component: HomeComponent }]),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ChartsModule,
		WavesModule,
		LottieAppModule,
	],
})
export class HomeModule {}
