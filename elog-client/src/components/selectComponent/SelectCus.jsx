import { useField } from 'formik'
import React from 'react'


function SelectCus({label, ...props}) {
  const [field, meta]=useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default SelectCus