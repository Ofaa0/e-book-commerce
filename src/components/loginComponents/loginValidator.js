import * as Yup from "yup";

export const validationLoginSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

export const validationSignupSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
