import { CommonModule } from '@angular/common'
// tslint:disable-next-line: semicolon
import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    WavesModule,
  ],
})
export class HomeModule { }
