/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { addUser } from './firebase';
import { toast } from "react-toastify";


function CreateUser() {
  const [state, setState] = useState({
    Name: "",
    Aadhar:"",
    Account: "",
    Balance: "",
    db: {},
  });

  const submitHandler = (event) => {
    event.preventDefault();
    state.db[state.Account] = [state.Name, state.Aadhar, state.Account, state.Balance]
    addUser(state.db[state.Account])
    toast.success("Customer Added Sucessfully");
    setState({...state, Name: "", Aadhar:"", Account: "", Balance: ""})
  }

  return (
    <div className="create__user" css={CSS}>
      <h1>Add Customer</h1>
      <form onSubmit={submitHandler} className="form">
        <div className="form__item">
          <label className="label" htmlFor="name">
            Enter Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="input"
            value={state.Name}
            placeholder="Full Name"
            onChange={(event) =>
              setState({ ...state, Name: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="aadhar-no" className="label">
            Enter Aadhar Number:
          </label>
          <input
            type="text"
            name="aadhar-no"
            className="input"
            value={state.Aadhar}
            placeholder="14-digit Aadhar Number"
            onChange={(event) =>
              setState({ ...state, Aadhar: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="account-no" className="label">
            Enter Account Number:
          </label>
          <input
            type="text"
            name="account-no"
            className="input"
            value={state.Account}
            placeholder="10-digit Account Number"
            onChange={(event) =>
              setState({ ...state, Account: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="balance" className="label">
            Opening Balance:
          </label>
          <input
            type="number"
            name="balance"
            className="input"
            min={0}
            value={state.Balance}
            placeholder="Enter Balance"
            onChange={(event) =>
              setState({ ...state, Balance: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const CSS = css`
  height: calc(100vh - 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FC5C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color:white;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* background-color: #FF4F8B; */}
    background: -webkit-linear-gradient(to left, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 50px;
    margin: 0 auto;
    border-radius: 4px;
    color: white;
    font-family: "Roboto", sans-serif;
    width: 80%;
    max-width: 650px;

    .form__item {
      display: flex;
      flex-direction: column;
      padding: 5px;
      margin: 10px 0;

      .label {
        font-size: 20px;
      }

      .input {
        font-size: 18px;
        margin-top: 10px;
        padding: 5px;
        border-radius: 4px;
      }

      .submit {
        padding: 10px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 600;
        background: var(--navy-blue);
        color: var(--powder-blue);
        transition: all 0.3s ease;
      }

      .submit:hover {
        background-color: var(--sky-blue-crayola);
        color: var(--navy-blue);
      }

      .submit:target {
        background-color: var(--blizzard-blue;);
      }
    }
  }

  @media screen and (max-width: 780px) {
    .form {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export default CreateUser;