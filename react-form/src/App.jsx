import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useForm} from "react-hook-form";
import classNames from "classnames";
import InputField from "./InputField.jsx";
function App() {
  const [submitted, setSubmitted] = useState();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm({defaultValues: {accountType: "business"}});
  console.log('form errors', errors);
  console.log('account type', watch('accountType'));
  const sendData = (data) => {
    setSubmitted(true);
    console.log('submitted', data);
  };

  return (
    <div className={"container mt-2"}>
      <form className={"col-md-6"} onSubmit={handleSubmit(sendData)}>
        <fieldset>
          <legend>Account Info</legend>
          <InputField
            fieldId={"accountNumber"}
            fieldLabel={"Account Number"}
            errors={errors}
            register={register}
            inputType={"number"}
          />
          <InputField
            fieldId={"routingNumber"}
            fieldLabel={"Routing Number"}
            errors={errors}
            register={register}
            inputType={"number"}
            validate={(v) => v.length === 9 || '9 digits needed'}
          />
        </fieldset>
        <fieldset>
          <legend>Account Type</legend>
          <div className={"form-check"}>
            <input type={"radio"} className={"form-check-input"} id={"businessAccount"} value={"business"} {...register("accountType")}/>
            <label htmlFor={"businessAccount"} className={"form-check-label"}>Business</label>
          </div>
          <div className={"form-check"}>
            <input type={"radio"} className={"form-check-input"} id={"personalAccount"} value={"personal"} {...register("accountType")} />
            <label htmlFor={"personalAccount"} className={"form-check-label"} >Personal</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Account Owner</legend>
          {watch('accountType') === 'business' &&
            <InputField
              fieldId={"businessName"}
              fieldLabel={"Business Name"}
              errors={errors}
              register={register}
              />
          }
          {watch('accountType') === 'personal' &&
            <>
              <InputField
                fieldId={"firstName"}
                fieldLabel={"First Name"}
                errors={errors}
                register={register}
              />
              <InputField
                fieldId={"lastName"}
                fieldLabel={"Last Name"}
                errors={errors}
                register={register}
              />
            </>
          }
        </fieldset>
        <div className={"mt-2"}>
          <button className={'btn btn-primary me-2'}>Submit</button>
          <button
            className={'btn btn-secondary'}
            type={"button"}
            onClick={() => {reset(); setSubmitted();}}
          >
            Reset
          </button>
        </div>
        {submitted &&
          <div className={"alert alert-success mt-2"}>
            Submitted
          </div>
        }
      </form>
    </div>
  )
}

export default App
