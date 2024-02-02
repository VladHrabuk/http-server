export default class Http400Error extends Error {
  constructor(message) {
    super(message || "Bad Request");
    this.status = 400;
  }
}
