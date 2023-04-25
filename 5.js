/* Переписать консольное приложение из предыдущего юнита на классы. */
class ElectricalAppliance{
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        if (!this.isOn) {
            console.log(this.name + " включен");
            this.isOn = true;
        } else {
            console.log(this.name + " уже включен");
        }
    }
}

class Lamp extends ElectricalAppliance{
    constructor(name, power){
        super(name, power);
        this.type = 'настольная лампа';
    }
}

class Computer extends ElectricalAppliance{
    constructor(name, power){
        super(name, power);
        this.type = 'компьютер';
    }
}

class ElectricalGrid{
    constructor(){
        this.appliances = [];
    }

    addAppliance(appliance) {
        if (appliance instanceof ElectricalAppliance) {
          this.appliances.push(appliance);
          console.log("Прибор " + appliance.name + " добавлен в сеть");
        }
    }

    getTotalPower(){
        let totalPower = 0;
      
        for (let i = 0; i < this.appliances.length; i++) {
          if (this.appliances[i].isOn) {
            totalPower += this.appliances[i].power;
          }
        }
      
        return totalPower;
    }
}

const lamp = new Lamp('Лампа', 50);
const computer = new Computer('Компьютер', 450);

lamp.turnOn();
computer.turnOn();

let electricalGrid = new ElectricalGrid();

electricalGrid.addAppliance(lamp);
electricalGrid.addAppliance(computer);

console.log(electricalGrid.getTotalPower());
