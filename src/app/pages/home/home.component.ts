import { Component } from '@angular/core'
import { FLAME_STATUS } from 'src/app/core/constants'
import { SocketService } from 'src/app/core/services'
import { AnimationConfigWithPath, AnimationItem, SVGRendererConfig } from 'lottie-web'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  flameStatus: FLAME_STATUS = FLAME_STATUS.OFF
  
  constructor(private socketService: SocketService) {

  }

  public chartType = 'line'

  public chartDatasets: Array<any> = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Temperature',
    },
  ]

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    // {
    //   backgroundColor: 'rgba(0, 137, 132, .2)',
    //   borderColor: 'rgba(0, 10, 130, .7)',
    //   borderWidth: 2,
    // }
  ]

  public chartOptions: any = {
    responsive: true
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
