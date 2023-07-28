![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | Design patterns

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Implement some of the most common design patterns in TS.
- Identify the benefits of design patterns.
- Be able to identify opportunity areas where a design pattern is useful.
- Learn to assess when design patterns fit into your codebase.

## Introduction

In this lab, we're you're going to learn more about design patterns by fixing some code implementation we have ready for you!

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install # | yarn
```

- Start the project.

```bash
npm start # | yarn start
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Instructions

### Iteration 1: Implement a Singleton

In this iteration, you are tasked to implement a Singleton class in TypeScript. The Singleton design pattern ensures that a class has only one instance and provides a global point of access to that instance.

You are provided with a partially implemented `Logger` class. Your task is to complete the implementation of the `Logger` class using the Singleton pattern.

```typescript
// logger.ts

class Logger {
  private static instance: Logger;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): Logger {
    // TODO: Implement the Singleton pattern here
  }

  public log(message: string): void {
    this.logs.push(message);
  }

  public printLogs(): void {
    console.log("Logs:");
    for (const log of this.logs) {
      console.log(log);
    }
  }
}

export default Logger;
```

Your task is to fill in the `TODO` section inside the `getInstance()` method to implement the Singleton pattern correctly.

**Requirements:**

1. The `getInstance()` method should return the same instance of `Logger` if it already exists, and if not, it should create a new instance and return it.
2. The `getInstance()` method should be accessible from outside the class, and it should be a static method.
3. Keep everything type safe.

**Example Usage:**

```typescript
import Logger from './logger';

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Message 1 from logger1");
logger2.log("Message 1 from logger2");
logger1.log("Message 2 from logger1");

logger1.printLogs();
logger2.printLogs();
```

**Expected Output:**

```
Logs:
Message 1 from logger1
Message 1 from logger2
Message 2 from logger1

Logs:
Message 1 from logger1
Message 1 from logger2
Message 2 from logger1
```

**Instructions:**

1. Implement the `getInstance()` method inside the `Logger` class using the Singleton pattern.
2. Test your implementation by running the provided example usage code.
3. Ensure that the `printLogs()` method prints the logs correctly for the singleton instance.

### Iteration 2: Implement a Factory

In this iteration, you need to implement a Factory class that produces different types of products. The Factory design pattern allows the creation of objects without specifying the exact class of the object that will be created.

You are provided with a partially implemented `Product` interface and two classes `ConcreteProductA` and `ConcreteProductB` that implement this interface. Your task is to implement the `ProductFactory` class, which will create instances of these products.

```typescript
// product.ts

interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  public operation(): string {
    return "Result of ConcreteProductA.";
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return "Result of ConcreteProductB.";
  }
}
```

You need to complete the implementation of the `ProductFactory` class, which will create instances of `ConcreteProductA` and `ConcreteProductB`.

```typescript
// productFactory.ts

// TODO: Implement the ProductFactory class using the Factory pattern

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
}

export default ProductFactory;
```

**Requirements:**

1. Implement the `ProductFactory` class using the Factory pattern.
2. The `ProductFactory` class should have a factory method named `createProduct`, which takes a parameter indicating the type of product to create (e.g., "A" for `ConcreteProductA`, "B" for `ConcreteProductB`).
3. The `createProduct` method should return a new instance of the specified product type.

**Example Usage:**

```typescript
import ProductFactory from './productFactory';

const factory = new ProductFactory();

const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log(productA.operation()); // Output: "Result of ConcreteProductA."
console.log(productB.operation()); // Output: "Result of ConcreteProductB."
```

**Instructions:**

1. Implement the `ProductFactory` class using the Factory pattern.
2. Test your implementation by running the provided example usage code.

### Iteration 3: Implement a Facade

In this iteration, you need to implement a Facade class that provides a simplified interface to a complex subsystem of classes. The Facade design pattern hides the complexities of the subsystem and provides a single entry point for the client code.

You are provided with a complex subsystem consisting of three classes: `SubsystemA`, `SubsystemB`, and `SubsystemC`. Your task is to implement the `Facade` class, which will serve as an interface to interact with these subsystem classes.

```typescript
// subsystemA.ts

class SubsystemA {
  public operationA1(): string {
    return "SubsystemA: operation A1.";
  }

  public operationA2(): string {
    return "SubsystemA: operation A2.";
  }
}

// subsystemB.ts

class SubsystemB {
  public operationB1(): string {
    return "SubsystemB: operation B1.";
  }

  public operationB2(): string {
    return "SubsystemB: operation B2.";
  }
}

// subsystemC.ts

class SubsystemC {
  public operationC1(): string {
    return "SubsystemC: operation C1.";
  }

  public operationC2(): string {
    return "SubsystemC: operation C2.";
  }
}
```

You need to implement the `Facade` class, which will provide a simplified interface to interact with the complex subsystem classes.

```typescript
// facade.ts

import { SubsystemA, SubsystemB, SubsystemC } from './subsystems';

class Facade {
  // TODO: Implement the Facade class using the Facade pattern
}

export default Facade;
```

**Requirements:**

1. Implement the `Facade` class using the Facade pattern.
2. The `Facade` class should provide methods that encapsulate the interactions with the subsystem classes.
3. The client code should interact with the `Facade` class to perform operations on the subsystems.

**Example Usage:**

```typescript
import Facade from './facade';

const facade = new Facade();

const resultA = facade.operationA();
const resultB = facade.operationB();
const resultC = facade.operationC();

console.log(resultA); // Output: "SubsystemA: operation A1. SubsystemA: operation A2."
console.log(resultB); // Output: "SubsystemB: operation B1. SubsystemB: operation B2."
console.log(resultC); // Output: "SubsystemC: operation C1. SubsystemC: operation C2."
```

**Instructions:**

1. Implement the `Facade` class using the Facade pattern.
2. Test your implementation by running the provided example usage code.

### Iteration 4: Implement an Observer

In this iteration, you need to implement the Observer pattern. The Observer pattern allows one-to-many dependency relationships between objects so that when one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically.

You are provided with a partially implemented `Subject` class. Your task is to complete the implementation of the `Subject` class and implement the `Observer` interface.

```typescript
// observer.ts

interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    // TODO: Implement this method to add an observer to the list
  }

  public removeObserver(observer: Observer): void {
    // TODO: Implement this method to remove an observer from the list
  }

  public notifyObservers(data: any): void {
    // TODO: Implement this method to notify all observers
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}
```

**Requirements:**

1. Implement the `addObserver` method in the `Subject` class to add an observer to the list of observers.
2. Implement the `removeObserver` method in the `Subject` class to remove an observer from the list of observers.
3. Implement the `notifyObservers` method in the `Subject` class to notify all registered observers by calling their `update` method with the provided data.
4. Implement the `Observer` interface with a single method `update(data: any)`, which will be called by the `Subject` to update the observer with new data.

**Example Usage:**

```typescript
import { Subject, Observer } from './observer';

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
```

**Instructions:**

1. Implement the `addObserver`, `removeObserver`, and `notifyObservers` methods in the `Subject` class.
2. Implement the `Observer` interface with the `update` method in a separate file.
3. Test your implementation by running the provided example usage code.

<br><br>

**Happy coding!** 💙