import * as Yup from "yup";

export const validationLoginSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

export const validationSignupSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
export const validationSignupMobileSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .test(
      "full-name",
      "Please enter first and last name",
      (value) => {
        if (!value) return false; // فاضي → fail
        const parts = value.trim().split(" ");
        return parts.length >= 2; // على الأقل كلمتين
      }
    ),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
