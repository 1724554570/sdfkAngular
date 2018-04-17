export class Todo {
  id: string;
  desc: string;
  completed: boolean;
  userId: number;
}
export class User {
  id: number;
  username: string;
  password: string;
}
export class Auth {
  user?: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
export class IAlert {
  id: number;
  type: string;
  message: string;
}

export class Users {
  id: number;
  uid: string;
  username: string;
  imgurl: string;
  ctime: string;
  state: number;
}
export class UsersInfo {
  id: number;
  uid: string;
  username: string;
  imgurl: string;
  ctime: string;
  state: number;
}

export class Article {
  users?: Users;
  id: number;
  productname: string;
  productdesc: string;
  proctime: string;
  proutime: string;
  foruser: number;
  prostate: number;
  propower: number;
  exadmin: number;
}