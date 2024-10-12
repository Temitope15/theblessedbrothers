/* eslint-disable react/prop-types */

import { Field, ErrorMessage } from "formik";
const FormField = ({ label, name, type = "text", placeholder, as = "input", rows }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <Field
        as={as}
        type={type}
        name={name}
        id={name}
        className="mt-1 p-2 block w-full border rounded-md"
        placeholder={placeholder}
        rows={rows}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
  
  export default FormField