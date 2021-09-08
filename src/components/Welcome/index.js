/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { Input } from "./Input";
import { Form, FieldSet } from "./styles";

//Simple validations fields
function valiationFields(fields) {
  const summary = fields.map((field) => field.value !== "");
  return !summary.includes(false);
}

export const Welcome = () => {
  //Handle error state and some important functions
  const [error, setError] = useState(null);
  const history = useHistory();

  //Getting the user session
  const user = useUserContext();

  //Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone } = event.target.elements;

    //Fields validation
    if (valiationFields([firstName, lastName, email, phone])) {
      user.login(
        () => {
          history.replace({ from: { pathname: "/" } });
        },
        {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
        }
      );
    } else {
      //Handle error
      setError("Please fill all the information");
    }
  };

  //if user session is valid redirect to "home"
  if (user.session) {
    return <Redirect to="/" />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <h1>We can't wait to meet you</h1>
        <ul>
          <li>
            <Input
              label="Please enter your first Name"
              name="firstName"
              type="text"
              required={true}
              placeholder="María"
            />
          </li>
          <li>
            <Input
              label="Please enter your last Name"
              name="lastName"
              type="text"
              required={true}
              placeholder="Ascencio"
            />
          </li>
          <li>
            <Input
              label="Please enter your email"
              name="email"
              type="email"
              required={true}
              placeholder="mail@email.com"
            />
          </li>
          <li>
            <Input
              label="Please enter a phone number"
              name="phone"
              type="tel"
              required={true}
              pattern="[0-9]{10}"
              placeholder="1234567890"
            />
          </li>
          <li>
            <button type="submit" className="primary">
              Send
            </button>
          </li>
          {error && <li>{error}</li>}
        </ul>
      </FieldSet>
    </Form>
  );
};
