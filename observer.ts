interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  public notifyObservers(data: any): void {
    this.observers.forEach((observer) => observer.update(data));
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}

export function testObserver() {
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

  subject.removeObserver(observer1);

  subject.someBusinessLogic();
}