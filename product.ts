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