export interface SignUpStartPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  push: (path: string) => void;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
