import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import axios from "axios";
import { url, useHandlePassword } from "../store";
import * as Yup from "yup";
import BackBtnPageName from "../components/loginComponents/BackBtnPageName";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage = () => {
  const { setEmail } = useHandlePassword();
  const navigate = useNavigate()
  const validationForgetPasswordSchema = Yup.object({
    email: Yup.string().email().required(),
  });
  const handleForgetPassword = async (vals) => {
    setEmail(vals.email)
    navigate("/reset-password")
  };

  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pb-60.5 lg:pb-111.5">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationForgetPasswordSchema}
        onSubmit={handleForgetPassword}
      >
        <Form className="mt-15 w-141.75 flex flex-col justify-center items-center px-4 lg:px-0">
          <h1 className="text-purple-them font-semibold text-[16px] leading-[21.75px] hidden lg:block">
            Forget Password?
          </h1>
          <BackBtnPageName pageName="Forget password" />

          <p className="font-normal text-[14px] leading-[21.75px] text-[#22222280] mb-10 mt-4">
            Enter your email to reset your password
          </p>
          <InputField
            type="email"
            label="Email"
            name="email"
            placeHolder="example@gmail.com"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 self-start mt-2"
          />

          <button
            type="submit"
            className="btn btn-secondary w-full py-3 font-semibold text-[16px] lg:text-[18px] mt-10"
          >
            Send reset code
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPasswordPage;
