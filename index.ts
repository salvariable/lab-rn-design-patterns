import Logger from './logger';
import ProductFactory from './productFactory';
import Facade from './facade';


const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Message 1 from logger1");
logger2.log("Message 1 from logger2");
logger1.log("Message 2 from logger1");

logger1.printLogs();
logger2.printLogs();

// Iteration 2:

const factory = new ProductFactory();

const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log(productA.operation()); // Output: "Result of ConcreteProductA."
console.log(productB.operation()); // Output: "Result of ConcreteProductB."

// Iteration 3:


const facade = new Facade();

const resultA = facade.operationA();
const resultB = facade.operationB();
const resultC = facade.operationC();

console.log(resultA); // Output: "SubsystemA: operation A1. SubsystemA: operation A2."
console.log(resultB); // Output: "SubsystemB: operation B1. SubsystemB: operation B2."
console.log(resultC); 

// Iteration 4: 

class ConcreteObserver implements Observer {
  public update(data: any): void {
    console.log(`Received update with data: ${data}`);
  }
}

const subject = new Subject();

const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.someBusinessLogic();
// Output:
// Doing some business logic...
// Received update with data: Some data to be sent to observers.
// Received update with data: Some data to be sent to observers.

subject.removeObserver(observer1);

subject.someBusinessLogic();
// Output:
// Doing some business logic...
// Received update with data: Some data to be sent to observers.