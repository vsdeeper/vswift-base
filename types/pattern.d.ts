export interface Pattern {
  sum: RegExp,
  discount: RegExp,
  num: RegExp,
  numNoZero: RegExp,
  stock: RegExp,
  hour: RegExp,
  minute: RegExp,
  postCode: RegExp,
  email: RegExp,
  phone: RegExp,
  landline: RegExp,
  telephone: RegExp,
  nohanzi: RegExp,
  numbydot: RegExp,
  numEnbydot: RegExp,
  idCard: RegExp,
  bankCard: RegExp,
  noSpace: RegExp,
  password: RegExp,
  [key: string]: RegExp
}