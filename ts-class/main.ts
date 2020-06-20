class Employe {
  employeName: string;

  constructor(name: string) {
    this.employeName = name;
  }

  render() {
    console.log(`Good Night ${this.employeName}`);
  }
}

let theEmploye = new Employe("Usamah Basalamah");
console.log(theEmploye.employeName);
theEmploye.render();

class Manager extends Employe {
  constructor(managerName: string) {
    super(managerName);
  }

  managerWork() {
    console.log(`Sorry manager has been worked`);
  }
}

let theManager = new Manager("Basalamah");
theManager.managerWork();
theManager.render();
console.log(theManager.employeName);
