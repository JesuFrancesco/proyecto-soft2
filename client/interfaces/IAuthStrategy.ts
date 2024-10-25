import { SignUpSchemaType } from "@/schema/SignUpSchema";

export interface IAuthStrategy {
  login(formData: SignUpSchemaType): Promise<unknown>;
  logout(): Promise<unknown>;
  signup(formData: SignUpSchemaType): Promise<unknown>;
  googleSignUp(formData: SignUpSchemaType): Promise<unknown>;
}
