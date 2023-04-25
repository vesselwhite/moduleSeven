/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку.
 Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/


function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}
  
ElectricalAppliance.prototype.turnOn = function() {
    if (!this.isOn) {
      console.log(this.name + " включен");
      this.isOn = true;
    } else {
      console.log(this.name + " уже включен");
    }
}

function Lamp(name, power) {
    this.name = name;
    this.power = power;
    this.type = "настольная лампа";
}
  
Lamp.prototype = new ElectricalAppliance();
  
function Computer(name, power) {
    this.name = name;
    this.power = power;
    this.type = "компьютер";
}
  
Computer.prototype = new ElectricalAppliance();

function ElectricalGrid() {
    this.appliances = [];
}
  
ElectricalGrid.prototype.addAppliance = function(appliance) {
    if (appliance instanceof ElectricalAppliance) {
      this.appliances.push(appliance);
      console.log("Прибор " + appliance.name + " добавлен в сеть");
    }
}
  
ElectricalGrid.prototype.getTotalPower = function() {
    let totalPower = 0;
  
    for (let i = 0; i < this.appliances.length; i++) {
      if (this.appliances[i].isOn) {
        totalPower += this.appliances[i].power;
      }
    }
  
    return totalPower;
}
  

let lamp = new Lamp("Лампа настольная", 60);
let computer = new Computer("Компьютер", 200);
  
let electricalGrid = new ElectricalGrid();
electricalGrid.addAppliance(lamp);
electricalGrid.addAppliance(computer);
  

lamp.turnOn();
computer.turnOn();
  

console.log("Сумма потребляемой мощности: " + electricalGrid.getTotalPower() + " Вт");
