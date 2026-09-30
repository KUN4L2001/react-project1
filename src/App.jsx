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

  //event(onSubmit)-->SBE
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData)
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