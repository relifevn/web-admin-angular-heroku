export class TemperatureModel {
    createdAt: Date
    value: number
    unit: string
}

export class TemperatureResponseModel {
    data: TemperatureModel[]
}