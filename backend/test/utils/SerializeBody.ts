export default class SerializeBody<T> {
  constructor(private body: T) {
    this.body = body;
  }

  public removeKey(key: keyof typeof this.body) {
    const copyBody = { ...this.body };

    const { [key]: _, ...removedKey } = copyBody;

    return removedKey;
  }

  public repeatChar(key: string, quantity: number) {
    const copyBody = { ...this.body };

    if (typeof copyBody[key] !== 'string') {
      throw new Error('Object key must be string');
    }

    copyBody[key] = copyBody[key].repeat(quantity);

    return copyBody;
  }

  public changeKeyValue(key: keyof typeof this.body, newValue: any) {
    const copyBody = { ...this.body };

    copyBody[key] = newValue;

    return copyBody;
  }
}
