export class Config {
  private constructor() {}
  public static EXPRESS_API_URL = process.env.EXPRESS_API_URL ?? "";
}
