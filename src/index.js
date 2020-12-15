import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];

const initialValues = { petName: "", petType: "" };

function SimpleForm() {
  // the state
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialValues);

  const change = (evt) => {
    const { name, value } = evt.target;
  };
  const submit = (evt) => {};

  return (
    <div className="container">
      <h1>Simple Form</h1>
      {pets.map((pet, idx) => {
        return (
          <div key={idx}>
            {pet.petName} is a {pet.petType}
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input
          name="petName"
          type="text"
          value={formValues.petName}
          onChange={change}
        ></input>
        <input
          name="petType"
          type="text"
          value={formValues.petType}
          onChange={change}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>,
  document.querySelector("#root")
);
