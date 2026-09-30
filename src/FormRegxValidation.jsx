import { useId, useState } from "react";

const FormRegValidation = () => {
     const [formData, setFormData] = useState({
        email:"",
        url:"",
        digit:"",
        number:"",
        alphaNumeric:""
      });
    
      const {email,url,digit, number,alphanumeric} = formData; //destructure state
    
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
        //Validating email
        let regxEmail = /\S+@\S+\.\S+/
        if(email===""){
            validate.email="This field is mandatory!!!"
        } else if(!regxEmail.test(email)) {
            validate.email="Email pattern is not working!!!"
        }
        setErrors(validate)
      }
    
      const reqId = useId();
      const nameId = useId();
      const rangeId = useId();
    
      return (
        <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor={rangeId + "rangeVal"}>Email : </label>
              <div>
                <input
                  type="text"
                  id={rangeId + "rangeVal"}
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <span>{errors.email}</span>
            </section>
            <section>
              <label htmlFor={rangeId + "rangeVal"}>URL : </label>
              <div>
                <input
                  type="text"
                  id={rangeId + "rangeVal"}
                  name="url"
                  value={url}
                  onChange={handleChange}
                />
              </div>
              <span>{errors.url}</span>
            </section>
            <section>
              <label htmlFor={rangeId + "rangeVal"}>Digit : </label>
              <div>
                <input
                  type="text"
                  id={rangeId + "rangeVal"}
                  name="digit"
                  value={digit}
                  onChange={handleChange}
                />
              </div>
              <span>{errors.digit}</span>
            </section>
            <section>
              <label htmlFor={rangeId + "rangeVal"}>Number : </label>
              <div>
                <input
                  type="text"
                  id={rangeId + "rangeVal"}
                  name="number"
                  value={number}
                  onChange={handleChange}
                />
              </div>
              <span>{errors.url}</span>
            </section>
            <section>
              <button>SUBMIT</button>
            </section>
          </form>
    
      );
}

export default FormRegValidation;