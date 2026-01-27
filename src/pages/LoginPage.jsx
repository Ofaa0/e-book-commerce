import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import { validationLoginSchema } from "../components/loginComponents/loginValidator";
// images
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import axios from "axios";
import { url } from "../store";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (vals) => {
    const { email, password } = vals;
    try {
      const res = await axios.post(url + "/login", {
        email: email,
        password: password,
      });
      console.log("Login success:", res.data);
      toast.success(`welcome, ${res.data?.data?.user?.first_name}`)
      navigate("/");
    } catch (err) {
      console.error("Login failed");
      toast.error("wrong email or password")
    }
  };
  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pb-111.5">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={handleLogin}
        validationSchema={validationLoginSchema}
      >
        <Form className="mt-15 w-141.75 flex flex-col justify-center items-center">
          <h1 className="text-purple-them mb-10 font-semibold text-[16px] leading-[21.75px]">
            Welcome Back!
          </h1>
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
              className="text-red-500"
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              placeHolder="Enter password"
            />
            <ErrorMessage
              component={"p"}
              name="password"
              className="text-red-500 pb-3"
            />
          </div>
          <div className="self-start w-full flex justify-between mb-10">
            <label
              className="flex items-center gap-1 text-[#222222] cursor-pointer"
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
            <Link className="text-purple-them text-[16px] leading-[21.75px]">
              Forget password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full py-3 font-semibold text-[18px] mb-10"
          >
            Log in
          </button>
          <p className="text-[16px] text-[#222222] leading-[21.75px] mb-10">
            Don’t have an account?
            <Link to="/signup" className="text-purple-them font-semibold">
              Signup
            </Link>
          </p>
          <p className="text-[16px] text-[#00000080] leading-[21.75px] mb-6">
            or
          </p>
          <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3 mb-6">
            <img src={google} alt="google" /> Login with Google
          </button>
          <button className="btn text-[14px] font-normal border-none text-[#00000080] leading-[21.75px] bg-white shadow-2xl w-full flex items-center py-3">
            <img src={facebook} alt="facebook" /> Login with Facebook
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
