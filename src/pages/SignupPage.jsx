import { ErrorMessage, Field, Form, Formik } from "formik";
import InputField from "../components/loginComponents/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../store";
import { validationSignupSchema } from "../components/loginComponents/loginValidator";
import toast from "react-hot-toast";

// images
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleSignup = async (vals) => {
    const { firstName, lastName, email, password, cPassword } = vals;
    if (vals.agree) {
      try {
        const res = await axios.post(url + "/register", {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirmation: cPassword,
        });
        console.log("registration success:", res.data);
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
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pb-111.5">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          cPassword: "",
          agree: false,
        }}
        onSubmit={handleSignup}
        validationSchema={validationSignupSchema}
      >
        <Form className="mt-15 w-141.75 flex flex-col justify-center items-center">
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
          <div className="w-full grid grid-cols-2 gap-4">
            <ErrorMessage
              component={"p"}
              name="firstName"
              className="text-red-500"
            />
            <ErrorMessage
              component={"p"}
              name="lastName"
              className="text-red-500"
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
            <InputField
              type="password"
              name="cPassword"
              label="Confirm Password"
              placeHolder="Enter password"
            />
            <ErrorMessage
              component={"p"}
              name="cPassword"
              className="text-red-500 pb-3"
            />
          </div>
          <div className="self-start w-full flex justify-between mb-10">
            <label
              className="flex items-center gap-1 text-[#222222] cursor-pointer"
              htmlFor="agree"
            >
              <Field
                id="agree"
                name="agree"
                type="checkbox"
                className="checkbox checkbox-secondary h-4 w-4 rounded-[5px]"
              />{" "}
              Agree with
              <Link className="text-purple-them text-[16px] leading-[21.75px]">
                Terms & Condition
              </Link>
              {/* Agree with Terms & Conditions */}
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-full py-3 font-semibold text-[18px] mb-10"
          >
            Sign Up
          </button>
          <p className="text-[16px] text-[#222222] leading-[21.75px] mb-10">
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
        </Form>
      </Formik>
    </div>
  );
};

export default SignupPage;
