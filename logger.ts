class Logger {
  private static instance: Logger;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance() {
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