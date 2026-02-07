import axios from "axios";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useMediaQuery } from "react-responsive";
import * as Yup from "yup";
import { url, useAuthStore } from "../store";
import { useEffect, useState } from "react";
import InputField from "../components/loginComponents/InputField";
import toast from "react-hot-toast";
import { BsPen } from "react-icons/bs";

const ProfilePage = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 443px)",
  });
  const [userInfo, setUserInfo] = useState({});
  const { token } = useAuthStore();
  const updateProfileVaildationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Phone must be digits only")
      .min(10)
      .required("Phone Number is required"),
    address: Yup.string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters"),
  });
  const updateUserInfo = async (vals) => {
    try {
      const res = await axios.post(
        url + "/profile/update",
        {
          phone: vals.phoneNumber,
          address: vals.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "apllication/json",
          },
        },
      );
      console.log(res.data);
      toast.success(res.data?.message);
    } catch (err) {
      console.log(err.data);
    }
  };
  const getUserProfileInfo = async () => {
    console.log(token);
    try {
      const res = await axios.get(url + "/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      setUserInfo(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (token) getUserProfileInfo();
  }, [token]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Please upload an image");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="w-full min-h-dvh bg-white-bg">
      <div className="container w-full h-full relative">
        <div className="flex justify-center items-center w-full h-full pt-55 pb-103.5">
          <div className="absolute w-45 h-45 left-1/2 -translate-x-1/2 -top-10 rounded-full">
            <img
              src={preview || "/user.jpg"}
              className="w-full h-full object-cover rounded-full"
            />
            <input
              onChange={handleImage}
              accept="image/"
              type="file"
              className="absolute bottom-2 right-3 z-10 cursor-pointer bg-green-400 w-8 h-8 opacity-0 rounded-full"
            />
            <img
              src="../../public/editPhoto.png"
              className="absolute bottom-2 right-3 cursor-pointer rounded-full text-6xl bg-purple-them text-white flex justify-center items-center"
            />
          </div>
          <Formik
            initialValues={{
              firstName: userInfo.first_name || "",
              lastName: userInfo.last_name || "",
              email: userInfo.email || "",
              phoneNumber: userInfo.phone || "",
              address: userInfo.address || "",
            }}
            onSubmit={updateUserInfo}
            validationSchema={updateProfileVaildationSchema}
          >
            <Form className="w-184">
              <div className="w-full bg-white text-base-strong-text p-10 rounded-lg">
                <h1 className="text-center text-[20px] font-semibold pb-10">
                  General information
                </h1>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      labelStyle={"text-base-text! text-[14px]! pb-4!"}
                      isDisabled={true}
                      name={"firstName"}
                      label={"First Name"}
                      placeHolder={userInfo.first_name}
                      type={"text"}
                    />
                    <InputField
                      labelStyle={"text-base-text! text-[14px]! pb-4!"}
                      isDisabled={true}
                      name={"lastName"}
                      label={"Last Name"}
                      placeHolder={userInfo.last_name}
                      type={"text"}
                    />
                  </div>
                  <InputField
                    labelStyle={"text-base-text! text-[14px]! pb-4!"}
                    isDisabled={true}
                    name={"email"}
                    label={"email"}
                    placeHolder={userInfo.email}
                    type={"email"}
                  />
                  <div>
                    <InputField
                      labelStyle={"text-base-text! text-[14px]! pb-4!"}
                      isDisabled={false}
                      name={"phoneNumber"}
                      label={"Phone number"}
                      placeHolder={userInfo.phone}
                      type={"text"}
                    />
                    <ErrorMessage
                      component={"p"}
                      name="phoneNumber"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <InputField
                      labelStyle={"text-base-text! text-[14px]! pb-4!"}
                      isDisabled={false}
                      name={"address"}
                      label={"Address"}
                      placeHolder={userInfo.address}
                      type={"text"}
                    />
                    <ErrorMessage
                      component={"p"}
                      name="address"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <button className="btn btn-secondary mt-10 py-3 px-14">
                  Shop now
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
