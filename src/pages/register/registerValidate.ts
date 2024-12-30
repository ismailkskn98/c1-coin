import { createRegisterSchema } from "./registerSchema";
import i18next from "i18next";

export type RegisterType = {
    firstname: string,
    lastname: string,
    number: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const registerValidate = (data: RegisterType) => {
    const registerSchema = createRegisterSchema(i18next.t);
    const validateResult = registerSchema.safeParse(data);

    if (!validateResult.success) {
      const newErrors: {
        firstname?: string;
        lastname?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
        number?: string;
      } = {};

      validateResult.error.issues.forEach((issue) => {
        newErrors[issue.path[0] as keyof typeof newErrors] = issue.message;
      });

      return newErrors;
    }
    return null; 
}