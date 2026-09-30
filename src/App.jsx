import React, { useId, useState } from "react";

const FormValidate = () => {
  const [formData, setFormData] = useState({
    required: "",
    maxLength: "",
    minLength: "",
    valLength: "",
    maxRange: "",
    minRange: "",
    valRange: "",
  });

  const {required,maxLength,minLength,valLength,minRange,maxRange,valRange} = formData; //destructure state

  //event(onChange)-->SBE
   const handleChange = (event) => {
    console.log(event);
    const {name,value}=event.target // input field name and value
    setFormData({...formData,[name]:value}) //Object spreading and computed property name
    console.log(formData)
  };

  const [errors, setErrors] = useState({})
  //event(onSubmit)-->SBE
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData)
    const validate = {};

    //validating "required" field
    if(required === ""){
        validate.required="This field is mandatory!!!"
    }
    console.log(maxLength)
    //Validating "maxLength" field
    if(maxLength === ""){
        validate.maxLength="This field is mandatory!!!"
        console.log(maxLength.length)
    } else if(maxLength.length > 6){
        validate.maxLength="Maximun letters must be 6!!!"
    }
    //Validating "minLength" field
    if(minLength === ""){
        validate.minLength="This field is mandatory!!!"
    } else if(minLength.length < 6) {
        validate.minLength="Minimum letters must be 6!!!"
    }
    //Validating "valLength" field
    if(valLength === ""){
        validate.valLength = "This field is mandatory!!!"
    } else if(valLength.length < 6 || valLength.length > 12){
        validate.valLength = "Letters must be between 6-12!!!"
    }

    console.log(validate)

    setErrors(validate)
  }

  const reqId = useId();
  const nameId = useId();
  const rangeId = useId();

  return (

      <form onSubmit={handleSubmit}>
        <section>
          <h1>Form validation</h1>
        </section>
        <section>
          <label htmlFor={reqId}>Required : </label>
          <div>
            <input
              type="text"
              id={reqId}
              name="required"
              value={required}
              onChange={handleChange}
            />
          </div>
          <span>{errors.required}</span>
        </section>
        <section>
          <label htmlFor={nameId + "max"}>Maximum Length : </label>
          <div>
            <input
              type="text"
              id={nameId + "max"}
              name="maxLength"
              value={maxLength}
              onChange={handleChange}
            />
          </div>
          <span>{errors.maxLength}</span>
        </section>
        <section>
          <label htmlFor={nameId + "min"}>Minimum Length : </label>
          <div>
            <input
              type="text"
              id={nameId + "min"}
              name="minLength"
              value={minLength}
              onChange={handleChange}
            />
          </div>
          <span>{errors.minLength}</span>
        </section>
        <section>
          <label htmlFor={nameId + "valLen"}>Value Length : </label>
          <div>
            <input
              type="text"
              id={nameId + "valLen"}
              name="valLength"
              value={valLength}
              onChange={handleChange}
            />
          </div>
          <span>{errors.valLength}</span>
        </section>
        <section>
          <label htmlFor={rangeId + "max"}>Maximum Range : </label>
          <div>
            <input
              type="number"
              id={rangeId + "max"}
              name="maxRange"
              value={maxRange}
              onChange={handleChange}
            />
          </div>
          <span>{errors.maxRange}</span>
        </section>
        <section>
          <label htmlFor={rangeId + "min"}>Minimum Range : </label>
          <div>
            <input
              type="number"
              id={rangeId + "min"}
              name="minRange"
              value={minRange}
              onChange={handleChange}
            />
          </div>
          <span>{errors.minRange}</span>
        </section>
        <section>
          <label htmlFor={rangeId + "rangeVal"}>Range value : </label>
          <div>
            <input
              type="number"
              id={rangeId + "rangeVal"}
              name="valRange"
              value={valRange}
              onChange={handleChange}
            />
          </div>
          <span>{errors.valRange}</span>
        </section>
        <section>
          <button>SUBMIT</button>
        </section>
      </form>

  );
};

export default FormValidate;

//* SBE --> target -->1)name(keyname)  2)value(data)

//! useId() --> hook --> generate the unique id on each call & each render
//? const id = useId()