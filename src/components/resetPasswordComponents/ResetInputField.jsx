import { Field } from "formik";

const ResetInputField = ({ name, inputRef, onChange, onKeyDown }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <input
          {...field}
          ref={inputRef}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="rounded-xl py-4 px-6 w-15 h-15 bg-white border border-base-text text-base-strong-text text-center"
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
    </Field>
  );
};

export default ResetInputField;
