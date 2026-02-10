import { Form, Formik } from "formik";
import ResetInputField from "../components/resetPasswordComponents/ResetInputField";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store";

const ResetPasswordPage = () => {
  const { user } = useAuthStore();
  console.log("from reset pass = >", user);
  
  const length = 4;
  const inputsRef = useRef([]);

  const handleChange = (e, index, setFieldValue) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    setFieldValue(`code[${index}]`, value);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleResetPassword = (vals) => {
    const inputsCode = vals.code.join("");
  };
  return (
    <div className="w-full min-h-dvh bg-white-bg flex justify-center items-start pt-10">
      <div className="container w-full h-4">
        <div className="w-full flex  flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-purple-them font-semibold text-[16px]">
              Reset your password!
            </h1>
            <p className="text-base-text">
              Enter the 4 dights code that you received on your email
            </p>
          </div>
          <Formik
            initialValues={{
              code: Array(length).fill(""),
            }}
            onSubmit={handleResetPassword}
          >
            {({ values, setFieldValue }) => (
              <Form className="flex items-center gap-10 mt-10 flex-col">
                <div className="flex items-center gap-6">
                  {values.code.map((_, index) => (
                    <ResetInputField
                      key={index}
                      name={`code[${index}]`}
                      inputRef={(el) => (inputsRef.current[index] = el)}
                      onChange={(e) => handleChange(e, index, setFieldValue)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary w-full py-3 px-4 font-semibold text-[16px] lg:text-[18px] mb-10"
                >
                  Reset password
                </button>
                <p className="text-[16px] text-base-strong-text leading-[21.75px] flex gap-1">
                  Didn’t receive a code?
                  <span className="text-purple-them font-semibold">
                    Send again{" "}
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
