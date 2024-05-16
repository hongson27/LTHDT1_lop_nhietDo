class Temperature {
    constructor(temperature) {
        this.temperature = temperature;
    }
    getTemperature() {
        return this.temperature;
    }
    toKenvin() {
        return this.temperature + 273.15;
    }
    toFahrenheit() {
        return this.temperature * 1.8 + 32;
    }
}