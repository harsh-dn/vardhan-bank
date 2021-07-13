/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function AllOurCustomers() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    db
      .collection("usersDB")
      .orderBy("Name")
      .onSnapshot((snapshot) =>
        setState(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      )
  };

  return (
    <div className="allOurCustomers" css={CSS}>
      <h1>All Customers</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>SI</td>
              <td>Name</td>
              <td>Aadhar Number</td>
              <td>Account Number</td>
              <td>Current Balance</td>
              <td>Send Money</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i + 1}</td>
                <td>{obj.data.Name}</td>
                <td>{obj.data.Aadhar}</td>
                <td>{obj.data.Account}</td>
                <td>{obj.data.Balance}</td>
                <td><Link to={{ pathname: "/transfer", abc: "harsh" }}>Transfer Money</Link></td>
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

.allOurCustomers{
  text-align:center;
}

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

    ${'' /* display: flex;
    flex-direction: column;
    justify-content: center; */}

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

            ion-icon {
              font-size: 20px;
            }
          }
        }
      }

      tbody {
        background-color: #6A82FB;

        tr {
          a{
            color: #E8E8E8;
            transition: all 0.3s ease;
            text-decoration: none;
            
          } 

          a:hover {
            text-decoration: underline;
          } 

          td {
            padding: 10px;
            border-right: 1px solid var(--navy-blue);
            text-align: right;
          }
        }
        .light {
          background-color:#9278D9 ;
        }
      }
    }
  }
`;

export default AllOurCustomers;

