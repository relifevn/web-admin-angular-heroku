export class TemperatureModel {
    createdAt: Date
    value: number
}

export class TemperatureResponseModel {
    data: TemperatureModel[]
}