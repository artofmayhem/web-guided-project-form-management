import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    console.log(e.target);
    console.log(formValues);
    const { name, value } = e.target;
    // this basically says { petName: '', petType: '', petName: 'exampleValue' }
    setFormValues({ ...formValues, [name]: value });
  }

  const submit = (e) => {
    e.preventDefault();

    const newPet = {
      // needs identical structure to the other pets
      petName: formValues.petName,
      petType: formValues.petType
    }
    console.log(newPet);

    // use your setPets helper function
    setPets(pets.concat(newPet));
    // reset the formsValue state
    setFormValues(initialFormValues);
  }

  return (
    <div>
      {
        pets.map((pet, i) => (
          <div key={i}>
            {pet.petName} is a {pet.petType}
          </div>
        ))
      }

      <form onSubmit={submit}>
        <input
          name="petName"
          value={formValues.petName}
          onChange={change} />
        <input
          name="petType"
          value={formValues.petType}
          onChange={change} />

          <button>submit new pet</button>
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)