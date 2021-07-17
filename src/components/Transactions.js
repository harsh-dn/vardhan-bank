/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function Transactions() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  //db.collection('things').orderBy('createdAt').startAfter(today)
  const fetchData = () => {
    db
      .collection("transactions").orderBy('createdAt','desc')
      .onSnapshot((snapshot) =>
        setState(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      )
  }

  return (
    <div className="transactions" css={CSS}>
      <h1>Transactions History</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>SI</td>
              <td>Payer</td>
              <td>Payee</td>
              <td>Amount</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i + 1}</td>
                <td>{obj.data.from}</td>
                <td>{obj.data.to}</td>
                <td>{obj.data.amount}</td>
                <td>{`${obj.data.createdAt?.toDate().toDateString() ? obj.data.createdAt?.toDate().toDateString() : "Not"} ${obj.data.createdAt?.toDate().toLocaleTimeString('en-US') ? obj.data.createdAt?.toDate().toLocaleTimeString('en-US') : "Available"}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #FC5C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: "Roboto", sans-serif;

  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: white;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  .table {
    display: table;
    overflow: scroll;

    table {
      table-layout: fixed;
      color: var(--powder-blue);
      margin: 2rem auto;
      border-collapse: collapse;
      border: 1px solid black;

      thead {
        background-color: var(--navy-blue);

        tr {
          td {
            padding: 10px;
            text-align: center;
            font-weight: 700;
          }
        }
      }

      tbody {
        background-color: #6A82FB;

        tr {

          td {
            padding: 10px;
            border-right: 1px solid var(--navy-blue);
            text-align: right;
          }
        }

        .light {
          background-color: #9278D9 ;
        }
      }
    }
  }
`;

export default Transactions;
