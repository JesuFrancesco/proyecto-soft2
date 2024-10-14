export interface IAuthStrategy {
  login(formData: FormData): Promise<void>;
  logout(): Promise<void>;
  signup(formData: FormData): Promise<void>;
  googleSignUp(formData: FormData): Promise<void>;
}
