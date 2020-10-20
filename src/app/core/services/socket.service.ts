
import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { Subject } from 'rxjs'
import { SOCKET_EVENT } from '../constants'
import { TemperatureResponseModel } from '../models'

@Injectable()
export class SocketService {

    private temperatureDataSubject = new Subject<TemperatureResponseModel>()
    public temperatureData$ = this.temperatureDataSubject.asObservable()

    private cameraRawSubject = new Subject<string>()
    public cameraRaw$ = this.cameraRawSubject.asObservable()

    constructor(private socket: Socket) {
        this.socket.on('connect', (data) => {
            console.log(`[INFO] Socket connected!`)
        })
        this.socket.on('disconnect', (data) => {
            console.log(`[INFO] Socket disconnected!`)
        })
        this.socket.on(SOCKET_EVENT.TEMPERATURE_GET, (data: TemperatureResponseModel) => {
            data.data = data.data.map(e => {
                e.createdAt = new Date(e.createdAt)
                return e
            })
            this.temperatureDataSubject.next(data)
        })
        this.socket.on(SOCKET_EVENT.CAMERA_RAW_GET, (data: string) => {
            // console.log(SOCKET_EVENT.CAMERA_RAW_GET, data)
            this.cameraRawSubject.next(data)
        })
    }

    sendMessage(msg: string) {
        this.socket.emit("message", msg)
    }

}