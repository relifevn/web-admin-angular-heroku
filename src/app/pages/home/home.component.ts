import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { FLAME_STATUS } from 'src/app/core/constants'
import { SocketService } from 'src/app/core/services'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	flameStatus: FLAME_STATUS = FLAME_STATUS.OFF
	cameraRaw: SafeUrl = null
	cameraFilter: SafeUrl = null

	constructor(
		private socketService: SocketService,
		private sanitization: DomSanitizer,
		private httpClient: HttpClient,
	) {
		this.socketService.temperatureData$.subscribe(data => {
			this.chartDatasets[0].data = [
				...this.chartDatasets[0].data,
				...data.data.map(e => e.value),
			]
			const length = this.chartDatasets[0].data.length
			if (length > 20) {
				this.chartDatasets[0].data = this.chartDatasets[0].data.slice(
					length - 20,
					length,
				)
			}
			this.chartLabels = this.chartDatasets[0].data.map((e, i) => String(i))
		})
		this.socketService.cameraRaw$.subscribe(img => {
			this.cameraRaw = this.sanitization.bypassSecurityTrustUrl(img)
		})
		this.socketService.cameraFilter$.subscribe(img => {
			this.cameraFilter = this.sanitization.bypassSecurityTrustUrl(img)
		})
		this.socketService.detectFlame$.subscribe(data => {
			if (data === 1) {
				this.flameStatus = FLAME_STATUS.ON
			} else {
				this.flameStatus = FLAME_STATUS.OFF
			}
		})
	}

	ngOnInit() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				this.httpClient
					.put('https://khkt-thcs-hiep-phuoc-server.herokuapp.com/gps', {
						lat: pos?.coords?.latitude || 0.0,
						lng: pos?.coords?.longitude || 0.0,
						type: 'flame-detector',
					})
					.subscribe(_ => {
						console.log('GPS updated')
					})
			})
		}
	}

	chartType = 'line'

	chartDatasets: Array<{ data: number[]; label: string }> = [
		{
			data: [],
			label: 'Temperature',
		},
	]

	chartLabels: Array<string> = []

	chartColors: Array<any> = [
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

	chartOptions: any = {
		responsive: true,
	}
	chartClicked(e: any): void {}
	chartHovered(e: any): void {}
}
