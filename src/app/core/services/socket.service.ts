
import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { Subject } from 'rxjs'
import { TemperatureResponseModel } from '../models'

@Injectable()
export class SocketService {

    private temperatureDataSubject = new Subject<TemperatureResponseModel>()
    public temperatureData$ =this.temperatureDataSubject.asObservable()

    constructor(private socket: Socket) {
        this.socket.on('connect', (data) => {
            console.log(`[INFO] Socket connected!`)
        })
        this.socket.on('disconnect', (data) => {
            console.log(`[INFO] Socket disconnected!`)
        })
    }

    sendMessage(msg: string) {
        this.socket.emit("message", msg)
    }

}