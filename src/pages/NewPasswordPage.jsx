import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as Yup from "yup";
import { url, useHandlePassword } from "../store";
import axios from "axios";

const NewPasswordPage = () => {
  const { email, OTP } = useHandlePassword();
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const isMobile = useMediaQuery({
    query: "(min-width: 443px)",
  });
  const navigate = useNavigate();

  const handleReenterPasswordSubmit = async (vals) => {
    try {
      const res = await axios.post(url + "/reset-password",{
        email:email,
        password:vals.password,
        password_confirmation:vals.cPassword,
        otp:OTP,
      })
      // console.log(res.data);
      
    } catch (err) {
      // console.log(err);
    }
  };
  const validationReenterPasswordSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be at least 8 characters"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });
  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pt-10">
      <div className="container w-full h-4">
        <div className="w-full flex  flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-purple-them font-semibold text-[16px]">
              Create new password!
            </h1>
            <p className="text-base-text text-center leading-[21.75px]">
              Create a strong password <br /> Your new password must be
              different from previous one{" "}
            </p>
          </div>
          <Formik
            onSubmit={handleReenterPasswordSubmit}
            initialValues={{ password: "", cPassword: "" }}
            validationSchema={validationReenterPasswordSchema}
          >
            <Form className="mt-10 w-141.75 gap-6 flex flex-col justify-center items-center px-4 lg:px-0">
              <div className="w-full relative">
                <InputField
                  type={isHiddenPass ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeHolder={!isMobile ? "************" : "Enter password"}
                />
                {isHiddenPass ? (
                  <AiTwotoneEyeInvisible
                    className="text-gray-400 absolute text-2xl top-1/2 right-3"
                    onClick={() => {
                      setIsHiddenPass(!isHiddenPass);
                    }}
                  />
                ) : (
                  <AiTwotoneEye
                    className="text-gray-400 absolute text-2xl top-1/2 right-3"
                    onClick={() => {
                      setIsHiddenPass(!isHiddenPass);
                    }}
                  />
                )}
                <ErrorMessage
                  component={"p"}
                  name="password"
                  className="text-red-500 text-[14px] lg:text-[16px] pb-3"
                />
              </div>
              <div className="w-full relative">
                <InputField
                  type={isHiddenPass ? "text" : "password"}
                  name="cPassword"
                  label="Confirm Password"
                  placeHolder={!isMobile ? "************" : "Enter password"}
                />
                {isHiddenPass ? (
                  <AiTwotoneEyeInvisible
                    className="text-gray-400 absolute text-2xl top-1/2 right-3"
                    onClick={() => {
                      setIsHiddenPass(!isHiddenPass);
                    }}
                  />
                ) : (
                  <AiTwotoneEye
                    className="text-gray-400 absolute text-2xl top-1/2 right-3"
                    onClick={() => {
                      setIsHiddenPass(!isHiddenPass);
                    }}
                  />
                )}
                <ErrorMessage
                  component={"p"}
                  name="cPassword"
                  className="text-red-500 text-[14px] lg:text-[16px] pb-3"
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-full py-3 px-4 font-semibold text-[16px] lg:text-[18px] mt-10"
              >
                Reset password
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
