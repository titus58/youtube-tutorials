import classNames from "classnames";

function InputField({fieldId, fieldLabel, errors, register, inputType = "text", validate = () => true,}) {
  return <div className={"form-group mb-2"}>
    <label className={"form-label"} htmlFor={fieldId}>{fieldLabel}</label>
    <input type={inputType} className={classNames("form-control", { 'is-invalid': errors[fieldId]})} id={fieldId}
           {...register(fieldId,
             {
               required: 'Required',
               validate,
             })} />
    {errors[fieldId] && <div className={"invalid-feedback"}>
      {errors[fieldId].message}
    </div>}
  </div>
}

export default InputField;