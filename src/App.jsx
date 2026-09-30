import { useId, useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({
        required: "",
        maxLength: "",
        minLength: "",
        valLength: "",
        maxRange: "",
        minRange: "",
        valRange: ""
    });
    const {required, maxLength, minLength, valLength, maxRange, minRange, valRange} = formData; //destructure
    const handleChange = (event) => {
        console.log(event);
        const {name, value} = event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const reqId = useId();
    const nameId = useId();
    const rangeId = useId();

    return(
    
    <form onSubmit={handleSubmit}>
        <section>
            <h1>Form validation</h1>
        </section>
        <section>
            <label htmlFor={rangeId + "requiredRange"}>Required range: </label>
            <div>
                <input type="text"
                id={rangeId + "requiredRange"}
                name="required"
                value={required}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <label htmlFor={rangeId + "maxLength"}>Max Length: </label>
            <div>
                <input type="text"
                id={rangeId + "maxLength"}
                name="maxLength"
                value={valLength}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <label htmlFor={rangeId + "minLength"}>Min Length: </label>
            <div>
                <input type="text"
                id={rangeId + "minLength"}
                name="minLength"
                value={valRange}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <label htmlFor={rangeId + "lengthVal"}>Length value: </label>
            <div>
                <input type="text"
                id={rangeId + "lengthVal"}
                name="lengthVal"
                value={maxRange}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <label htmlFor={rangeId + "minRange"}>Min Range: </label>
            <div>
                <input type="text"
                id={rangeId + "minRange"}
                name="minRange"
                value={minRange}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <label htmlFor={rangeId + "rangeVal"}>Range Value: </label>
            <div>
                <input type="text"
                id={rangeId + "rangeVal"}
                name="valRange"
                value={valRange}
                onChange={handleChange} />
            </div>
        </section>
        <section>
            <button>Submit</button>
        </section>
    </form>
    )
}

export default App;