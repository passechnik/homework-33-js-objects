// об'єкт, що міститиме інфу про автомобілі
const car = {
    madeBy: "Toyota Motor Corpotation",
    model: "RAV4",
    year: 2020,
    averageSpeed: 150,
    fuelTankVolume: 50,
    averageFuelConsumption: 6.8,
}
//вивидення всієї інфи про об'єкт
console.log(Object.getOwnPropertyNames(car));

//додавання ім'я водія у список
car.driver = "John";

// перевірка водія на наявність його імені у списку

//вирахувати час для подолання переданої відстані, враховуючи зупинки на одну годину кожні чотири години
function findTripTime(distance) {
    let timeWithoutStops = Math.round(Number(distance / car.averageSpeed));
    console.log(timeWithoutStops);
    let rest = findTimeWithStops(timeWithoutStops);
    console.log(rest);
    return timeWithoutStops + rest;
}

function findTimeWithStops(timeWithoutStops) {
    let hoursBetweenStops = 4;
    return Math.floor(timeWithoutStops / hoursBetweenStops);
}

