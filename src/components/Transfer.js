/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { transact, addTransaction, db } from "./firebase";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams, useLocation } from "react-router";
import "react-toastify/dist/ReactToastify.css";


const Transfer = (props) => {
  const [state, setState] = useState({
    to: "",
    from: "",
    amount: "",
    accounts: [],
  });

  console.log(props)
  //{props.from ? setState({...state, "from":props.from}): null}

  const history = useHistory();

  useEffect(() => {
    db.collection("usersDB").onSnapshot((snapshot) => {
      setState({
        ...state,
        accounts: snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag1 = false;
    let flag2 = false;
    let id1, id2;
    //console.log(state.accounts);
    for (let i = 0; i < state.accounts.length; i++) {
      if (state.to === state.from) {
        toast.warn("Payer's and Reciever's account numbers cannot be same!");
        setState({ ...state, to: "", from: "", amount: "" });
        break;
      }
      // console.log(state.accounts[i].data.Account);
      // console.log(state.to);
      // console.log(state.from);
      if (state.accounts[i].data.Account === state.to) {
        flag1 = true;
        id1 = i;
        // console.log(state.to);
      }
      if (state.accounts[i].data.Account === state.from) {
        flag2 = true;
        id2 = i;
        // console.log(state.from);
      }
    }
    if (!flag1) {
      toast.warn("Check Reciever's account number!");
    } else if (!flag2) {
      toast.warn("Check Payer's account number!");
    } else {
      // Go to firebase
      if (Number(state.accounts[id2].data.Balance) < Number(state.amount)) {
        toast.warn("Insufficient Balance");
        setState({ ...state, to: "", from: "", amount: "" });
      } else {
        transact(
          state.accounts[id1].id,
          state.accounts[id1].data.Balance,
          state.accounts[id2].id,
          state.accounts[id2].data.Balance,
          state.amount
        );
        toast.success("Transaction Sucessfull");
        addTransaction(state.amount, state.to, state.from);
        setState({ ...state, to: "", from: "", amount: "" });
        history.replace("/transactions-history");
      }
    }
  };

  return (
    <div className="transfer" css={CSS}>
      <h1>Transfer Money</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Transfer from:
          </label>
          <input
            type="string"
            name="from"
            className="input"
            placeholder="Account Number"
            value={state.from}
            onChange={(e) => setState({ ...state, from: e.target.value })}
          />
        </div>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Transfer to:
          </label>
          <input
            type="string"
            name="from"
            className="input"
            placeholder="Account Number"
            value={state.to}
            onChange={(e) => setState({ ...state, to: e.target.value })}
          />
        </div>
        <div className="form__item">
          <label htmlFor="from" className="label">
            Enter Amount:
          </label>
          <input
            type="number"
            name="from"
            className="input"
            placeholder="Amount"
            value={state.amount}
            onChange={(e) => setState({ ...state, amount: e.target.value })}
          />
        </div>
        <div className="form__item">
          <button type="submit" className="submit">
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}

const CSS = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FC5C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: white;
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

export default Transfer;
