export class Logger {
  private static instance: Logger | undefined;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): Logger {
    if (Logger.instance === undefined) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
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

export function testSingleton() {
  console.log("Iteration 1: Implement a Singleton");
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  logger1.log("Message 1 from logger1");
  logger2.log("Message 1 from logger2");
  logger1.log("Message 2 from logger1");

  logger1.printLogs();
  logger2.printLogs();
  console.log("");
}