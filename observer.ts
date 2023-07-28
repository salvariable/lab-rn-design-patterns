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