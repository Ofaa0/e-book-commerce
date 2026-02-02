import { ErrorMessage, Field, Form, Formik } from "formik";
import { iconsList } from "../../localStore";
import { LuUser } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import * as Yup from "yup";
import axios from "axios";
import { url } from "../../store";

const ContactSection = () => {
  const handlemessageSubmit = async (vals) => {
    const { name, email, message } = vals;
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("subject", "Books");
    fd.append("message", message);
    try {
      const res = await axios.post(url + "/contacts/store", fd);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const messageValidation = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    message: Yup.string().required().min(8, "message is short"),
  });
  return (
    <div className="bg-secondery-bg py-30 w-full flex justify-center items-center">
      <div className="container">
        <div className="flex justify-between items-start gap-48 w-full">
          <div id="form-shape" className="w-full">
            <Formik
              onSubmit={handlemessageSubmit}
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={messageValidation}
            >
              <Form className="w-full">
                <h1 className="text-[40px] font-bold">
                  Have a Questions? <br /> Get in Touch
                </h1>
                <p className="text-[18px] text-[#FFFFFF80] pt-4 pb-15">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et <br /> ultricies est. Aliquam in justo varius,
                  sagittis neque ut, malesuada leo.
                </p>
                <div className="grid grid-cols-2 gap-6 w-full mb-4">
                  <div className="relative w-full">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="p-4 pl-12 border rounded-lg w-full"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 pt-2"
                      name="name"
                    />
                    <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[22px]" />
                  </div>
                  <div className="relative w-full">
                    <Field
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="p-4 pl-12 border rounded-lg w-full"
                    />
                    <ErrorMessage
                      component={"p"}
                      className="text-red-500 pt-2"
                      name="email"
                    />
                    <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[22px]" />
                  </div>
                </div>
                <div className="relative w-full">
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Your Message"
                    className="p-4 pl-12 border rounded-lg w-full"
                  />
                  <GoPencil className="absolute left-4 top-5 text-gray-400 text-[22px]" />
                  <ErrorMessage
                    component={"p"}
                    className="text-red-500"
                    name="message"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    className="btn btn-secondary mt-10 py-3 px-14"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            </Formik>
          </div>

          <div
            id="icons"
            className="flex flex-col justify-center gap-6 items-start"
          >
            {iconsList.map((el, index) => (
              <div key={index + 1} className="flex items-center gap-3 h-12">
                <img
                  src={el.img}
                  alt={el.title}
                  className="bg-white p-3 rounded-lg"
                />
                <p className="text-white text-[16px]">{el.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
