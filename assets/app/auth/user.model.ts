export class User {
  constructor(
    public email: string,
    public username: string,
    public practices?: [string],
    public id?: string,
    public follows?: [string],
    public password?: [string]
  ){
  }
}
