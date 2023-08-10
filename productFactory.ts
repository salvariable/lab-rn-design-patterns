import { ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  public createProduct(productType: string) {
    switch (productType) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error(`Product: ${productType} is not supported yet.`);
    }
  }
}

export function testFactory() {
  console.log("Iteration 2: Implement a Factory");
  const factory = new ProductFactory();

  const productA = factory.createProduct("A");
  const productB = factory.createProduct("B");

  console.log(productA.operation()); // Output: "Result of ConcreteProductA."
  console.log(productB.operation()); // Output: "Result of ConcreteProductB."
  console.log("");
}