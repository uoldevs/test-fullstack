class ErrorHandler extends Error {
  public status: number;
  public message: string;
  public fields: string[];
  constructor(status: number, message: string) {
    super();
    this.message = message;
    this.status = status;
    this.fields = [];
  }
}

export default ErrorHandler;
