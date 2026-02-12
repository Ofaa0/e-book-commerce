import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../store";
import {
  validationSignupMobileSchema,
  validationSignupSchema,
} from "../components/loginComponents/loginValidator";
import toast from "react-hot-toast";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";

// images
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BackBtnPageName from "../components/loginComponents/BackBtnPageName";

const SignupPage = () => {
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const isMobile = useMediaQuery({
    query: "(min-width: 443px)",
  });
  const navigate = useNavigate();
  const handleSignup = async (vals) => {
    const valsInfo = isMobile
      ? {
          first_name: vals.firstName,
          last_name: vals.lastName,
          email: vals.email,
          password: vals.password,
          password_confirmation: vals.cPassword,
        }
      : {
          first_name: vals.fullName.split(" ")[0] || "",
          last_name: vals.fullName.split(" ")[1] || "",
          email: vals.email,
          password: vals.password,
          password_confirmation: vals.cPassword,
        };
    if (vals.agree) {
      try {
        const res = await axios.post(url + "/register", valsInfo);
        // console.log("registration success:", res.data);
        toast.success("account is created");
        navigate("/login");
      } catch (err) {
        console.error("registration failed:", err);
        toast.error("This didn't work.");
      }
    } else {
      toast.error("you should agree with terms");
    }
  };
  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pb-60.5 lg:pb-111.5">
      <Formik
        initialValues={
          isMobile
            ? {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cPassword: "",
                agree: false,
              }
            : {
                fullName: "",
                email: "",
                password: "",
                cPassword: "",
                agree: false,
              }
        }
        onSubmit={handleSignup}
        validationSchema={
          isMobile ? validationSignupSchema : validationSignupMobileSchema
        }
      >
        <Form className="mt-15 w-141.75 flex flex-col justify-center items-center px-4 lg:px-0">
          <BackBtnPageName pageName="Create account" />
          {isMobile ? (
            <div className="w-full grid grid-cols-2 gap-4">
              <InputField
                type="text"
                name="firstName"
                label="First Name"
                placeHolder="John"
              />
              <InputField
                type="text"
                name="lastName"
                label="Last Name"
                placeHolder="Smith"
              />
            </div>
          ) : (
            <>
              <div className="w-full">
                <InputField
                  type="text"
                  name="fullName"
                  label="Name"
                  placeHolder="John Smith"
                />
                <ErrorMessage
                  component={"p"}
                  name="fullName"
                  className="text-red-500 text-[14px] lg:text-[16px] py-4"
                />
              </div>
            </>
          )}
          <div className="w-full grid grid-cols-2 gap-4">
            <ErrorMessage
              component={"p"}
              name="firstName"
              className="text-red-500 text-[14px] lg:text-[16px]"
            />
            <ErrorMessage
              component={"p"}
              name="lastName"
              className="text-red-500 text-[14px] lg:text-[16px]"
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <InputField
              type="email"
              name="email"
              label="Email"
              placeHolder="example@gmail.com"
            />
            <ErrorMessage
              component={"p"}
              name="email"
              className="text-red-500 text-[14px] lg:text-[16px]"
            />
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
            </div>

            <ErrorMessage
              component={"p"}
              name="password"
              className="text-red-500 text-[14px] lg:text-[16px] pb-3"
            />
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
            </div>

            <ErrorMessage
              component={"p"}
              name="cPassword"
              className="text-red-500 text-[14px] lg:text-[16px] pb-3"
            />
          </div>
          <div className="self-start w-full flex justify-between mb-10">
            <label
              className="flex items-center gap-1 text-base-strong-text cursor-pointer mt-4 text-[14px] lg:text-[16px]"
              htmlFor="agree"
            >
              <Field
                id="agree"
                name="agree"
                type="checkbox"
                className="checkbox checkbox-secondary h-4 w-4 rounded-[5px]"
              />{" "}
              Agree with
              <Link className="text-purple-them  leading-[21.75px]">
                Terms & Condition
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full py-3 font-semibold text-[16px] lg:text-[18px] mb-10"
          >
            Sign Up
          </button>
          {isMobile ? (
            <>
              <p className="text-[16px] text-base-strong-text leading-[21.75px] mb-10">
                Already have an account?
                <Link to="/login" className="text-purple-them font-semibold">
                  Login{" "}
                </Link>
              </p>
              <p className="text-[16px] text-[#00000080] leading-[21.75px] mb-6">
                or
              </p>
              <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3 mb-6">
                <img src={google} alt="google" /> Sign up with Google
              </button>
              <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3">
                <img src={facebook} alt="facebook" /> Sign up with Facebook
              </button>
            </>
          ) : (
            <>
              <span className="h-0.5 w-full bg-gray-400 relative mb-6">
                <span className="absolute text-gray-600 top-1/2 left-1/2 -translate-1/2 bg-white-bg px-3 text-[12px]">
                  Or signup with
                </span>
              </span>
              <div className="w-full grid grid-cols-2 gap-4">
                <button className="btn text-[14px] font-normal text-[#00000080] leading-[21.75px] bg-transparent border border-gray-400 w-full flex items-center rounded-lg py-4">
                  <img src={facebook} alt="facebook" />
                  Facebook
                </button>
                <button className="btn text-[14px] font-normal text-[#00000080] leading-[21.75px] bg-transparent border border-gray-400 w-full flex items-center rounded-lg py-4 mb-6">
                  <img src={google} alt="google" />
                  Google
                </button>
              </div>
              <p className="text-[14px] text-base-strong-text leading-[21.75px] mb-10">
                Don’t have an account?
                <Link to="/login" className="text-purple-them font-semibold">
                  Login
                </Link>
              </p>
            </>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default SignupPage;
