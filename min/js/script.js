let car = {
    manufacturer: 'Volkswagen',
    model: 'Scirocco',
    year: 2010,
    'average speed': 90,
    'fuel tank volume': 55,
    'average fuel consumption per 100 km': 9,
    drivers: 'Valera',
}
console.log(car);

car.addDrivers = function() {
    return this['new drivers'] = prompt('Add your name to drivers!');
};
console.log(car.addDrivers());

car.calcFuel = function() {
    return Math.floor((this['fuel tank volume'] / this['average fuel consumption per 100 km']) * 100);
};
console.log(car.calcFuel());

let distance = parseFloat(prompt('Enter your distance'));
car.calcDistance = function() {
    time = distance / this['average speed'];
    if (time < 4) {
        return time.toFixed(1);
    } else if (distance > 4) {
        time += Math.floor(time / 4);
        return time.toFixed(1);
    }
};
console.log(car.calcDistance());

let nameDrivers = prompt('Enter your name');
car.checkDrivers = function(nameDrivers) {
    if (car['drivers'] === 'Valera' && car['new drivers'] === 'Sasha') {
        console.log('You can drive');
    } else {
        console.log('Go away!');
    };
};
console.log(car.checkDrivers(nameDrivers));

car.checkFuel = function() {
    if (car.calcFuel() < distance) {
        console.log(confirm('You need to refuel a car!'))
    } else console.log('GO, GO, GO');
};
console.log(car.checkFuel());