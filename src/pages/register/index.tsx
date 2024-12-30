import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  const formSchema = z
    .object({
      firstname: z.string().min(3, t("validation.minName")),
      lastname: z.string().min(3, t("validation.minName")),
      number: z.string().refine((val) => val.length === 10 || val.length === 11, {
        message: t("validation.phoneLength"),
      }),
      email: z.string().email(t("validation.invalidEmail")),
      password: z
        .string()
        .min(6, t("validation.minPassword"))
        .regex(/[A-Z]/, t("validation.passwordUppercase"))
        .regex(/[0-9]/, t("validation.passwordNumber"))
        .regex(/[@$!%*?&]/, t("validation.passwordSpecial")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.passwordMatch"),
      path: ["confirmPassword"],
    });

  const [errors, setErrors] = useState<{
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    number?: string;
  }>({});

  const handleInputChange = (key: keyof typeof formSchema.shape, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!formSchema.safeParse(formData).success) {
      handleInputChange("firstname", formData.firstname);
      handleInputChange("lastname", formData.firstname);
      handleInputChange("email", formData.email);
      handleInputChange("password", formData.password);
      handleInputChange("confirmPassword", formData.confirmPassword);
      handleInputChange("number", formData.number);
    }
  };

  return (
    <section className="w-10/12 mx-auto flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="bg-black/30 backdrop-blur-md px-8 py-10 w-1/2 rounded-md flex flex-col items-center gap-10"
      >
        <h2 className="text-white font-bold text-6xl mb-3">{t("register")}</h2>
        <div className="w-full flex items-center justify-between gap-5">
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("firstName")}
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("firstname", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.firstname && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.firstname}</p>}
          </div>
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("lastName")}
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("lastname", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.lastname && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.lastname}</p>}
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-5">
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("email")}
              type="email"
              name="email"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.email && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.email}</p>}
          </div>
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("phoneNumber")}
              type="text"
              name="number"
              value={formData.number}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("number", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.number && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.number}</p>}
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-5">
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("password")}
              type="password"
              name="password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.password && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.password}</p>}
          </div>
          <div className="relative w-full flex flex-col gap-2 items-start">
            <Input
              placeholder={t("confirmPassword")}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("confirmPassword", e.target.value)}
              className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
            />
            {errors.confirmPassword && <p className="absolute left-[2px] -bottom-5 font-bold text-xs text-red-500">*{errors.confirmPassword}</p>}
          </div>
        </div>
        <Button className="uppercase text-lg self-center bg-black/60 backdrop-blur-sm px-6 py-5">{t("registerButton")}</Button>
      </form>
    </section>
  );
}
