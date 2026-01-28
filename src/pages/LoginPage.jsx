import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import { validationLoginSchema } from "../components/loginComponents/loginValidator";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
// images
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import axios from "axios";
import { url } from "../store";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const LoginPage = () => {
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const isMobile = useMediaQuery({
    query: "(min-width: 443px)",
  });
  const navigate = useNavigate();
  const handleLogin = async (vals) => {
    const { email, password } = vals;
    try {
      const res = await axios.post(url + "/login", {
        email: email,
        password: password,
      });
      console.log("Login success:", res.data);
      toast.success(`welcome, ${res.data?.data?.user?.first_name}`);
      navigate("/");
    } catch (err) {
      console.error("Login failed");
      toast.error("wrong email or password");
    }
  };
  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pb-60.5 lg:pb-111.5">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={handleLogin}
        validationSchema={validationLoginSchema}
      >
        <Form className="mt-15 w-141.75 flex flex-col justify-center items-center px-4 lg:px-0">
          {isMobile && (
            <h1 className="text-purple-them mb-10 font-semibold text-[16px] leading-[21.75px]">
              Welcome Back!
            </h1>
          )}
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
                type={isHiddenPass ? "password" : "text"}
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
          </div>
          <div className="self-start w-full flex justify-between mb-10">
            <label
              className="flex items-center gap-1 text-[#222222] cursor-pointer text-[12px] lg:text-[16px]"
              htmlFor="rememberMe"
            >
              <Field
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="checkbox checkbox-secondary h-4 w-4 rounded-[5px]"
              />{" "}
              Remember me
            </label>
            <Link className="text-purple-them text-[14px] lg:text-[16px] leading-[21.75px]">
              Forget password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full py-3 font-semibold text-[16px] lg:text-[18px] mb-10"
          >
            Log in
          </button>
          {isMobile ? (
            <>
              <p className="text-[16px] text-[#222222] leading-[21.75px] mb-10">
                Don’t have an account?
                <Link to="/signup" className="text-purple-them font-semibold">
                  Signup
                </Link>
              </p>
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-[16px] text-[#00000080] leading-[21.75px] mb-6">
                  or
                </p>
                <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3 mb-6">
                  <img src={google} alt="google" /> Login with Google
                </button>
                <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3">
                  <img src={facebook} alt="facebook" /> Login with Facebook
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="h-0.5 w-full bg-gray-400 relative mb-6">
                <span className="absolute text-gray-600 top-1/2 left-1/2 -translate-1/2 bg-white-bg px-3 text-[12px]">
                  Or login with
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
              <p className="text-[14px] text-[#222222] leading-[21.75px] mb-10">
                Don’t have an account?
                <Link to="/signup" className="text-purple-them font-semibold">
                  Signup
                </Link>
              </p>
            </>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
