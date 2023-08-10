import { SubsystemA } from "./subsystems/subSystemA";
import { SubsystemB } from "./subsystems/subSystemB";
import { SubsystemC } from "./subsystems/subSystemC";

class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  public operationA() {
    return `SubsystemA: ${this.subsystemA.operationA1()} ${this.subsystemA.operationA2()}`;
  }

  public operationB() {
    return `SubsystemA: ${this.subsystemB.operationB1()} ${this.subsystemB.operationB2()}`;
  }

  public operationC() {
    return `SubsystemC: ${this.subsystemC.operationC1()} ${this.subsystemC.operationC2()}`;
  }
}

export function testFacade() {
  const facade = new Facade();

  const resultA = facade.operationA();
  const resultB = facade.operationB();
  const resultC = facade.operationC();

  console.log(resultA); // Output: "SubsystemA: operation A1. SubsystemA: operation A2."
  console.log(resultB); // Output: "SubsystemB: operation B1. SubsystemB: operation B2."
  console.log(resultC); // Output: "SubsystemC: operation C1. SubsystemC: operation C2."
}