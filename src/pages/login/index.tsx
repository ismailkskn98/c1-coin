import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import BeatLoader from "react-spinners/BeatLoader";

export default function Login() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const formSchema = z.object({
    email: z.string().email(t("login.validation.invalidEmail")),
    password: z.string().min(6, t("login.validation.minPassword")),
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

  const handleInputChange = (key: keyof typeof formSchema.shape, value: string) => {
    setFormData({ ...formData, [key]: value });

    const fieldSchema = z.object({ [key]: formSchema.shape[key] });
    const result = fieldSchema.safeParse({ [key]: value });

    setErrors((prev) => ({
      ...prev,
      [key]: result.success ? undefined : result.error.issues[0].message,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!formSchema.safeParse(formData).success) {
      handleInputChange("email", formData.email);
      handleInputChange("password", formData.password);
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-10/12 mx-auto flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="bg-black/30 backdrop-blur-md px-8 py-10 w-1/3 rounded-md flex flex-col items-center gap-10"
      >
        <h2 className="text-white font-bold text-6xl mb-3">{t("login.title")}</h2>
        <div className="relative w-full flex flex-col gap-2 items-start">
          <Input
            placeholder={t("login.email")}
            type="email"
            name="email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
            className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
          />
          {errors.email && <p className="absolute left-0 -bottom-6 font-bold text-sm text-red-500">*{errors.email}</p>}
        </div>
        <div className="relative w-full flex flex-col gap-2 items-start">
          <Input
            placeholder={t("login.password")}
            type="password"
            name="password"
            value={formData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
            className="bg-black/60 backdrop-blur-sm focus:border-none border-none outline-none focus:outline-none py-5 placeholder:text-white text-white w-full"
          />
          {errors.password && (
            <p className="absolute left-0 -bottom-6 font-bold text-sm text-red-500">*{errors.password}</p>
          )}
        </div>
        <Button className="uppercase text-lg self-center bg-black/60 backdrop-blur-sm px-6 py-5">
          {loading ? <BeatLoader color="#ffffff" /> : t("login.button")}
        </Button>
      </form>
    </section>
  );
}
