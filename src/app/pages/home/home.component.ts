import { Component } from '@angular/core'
import { FLAME_STATUS } from 'src/app/core/constants'
import { SocketService } from 'src/app/core/services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  flameStatus: FLAME_STATUS = FLAME_STATUS.OFF
  
  constructor(private socketService: SocketService) {
    this.socketService.temperatureData$.subscribe(data => {
      this.chartDatasets[0].data = [
        ...this.chartDatasets[0].data,
        ...data.data.map(e => e.value)
      ]
      this.chartLabels = this.chartDatasets[0].data.map((e, i) => String(i))
    })
  }

  public chartType = 'line'

  public chartDatasets: Array<{data: number[], label: string}> = [
    {
      data: [],
      label: 'Temperature',
    },
  ]

  public chartLabels: Array<string> = []

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
