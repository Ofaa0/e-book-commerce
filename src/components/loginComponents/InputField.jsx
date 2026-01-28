import { Field } from "formik";

const InputField = ({ name, label , type, placeHolder}) => {
  return (
    <label
      className="text-black pb-2 text-[16px] lg:text-[18px] font-semibold leading-[21.75px]"
      htmlFor=""
    >
      {label} <br />
      <Field
        type={type}
        name={name}
        placeholder={placeHolder}
        className="bg-white text-black w-full rounded-lg p-4 py-3.5 lg:py-4 border border-[#22222233] text-[12px] lg:text-[16px] font-normal"
      />
    </label>
  );
};

export default InputField;
