/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bank from './images/hand-money-rupee-coin.svg';


function Navbar() {
  const ref = useRef();
  const size = useRef();

  const maxSize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 731) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
        size.current.style.height = "4.5rem";
      }
    })
  }

  useEffect(() => {
    maxSize()
    window.removeEventListener("resize", null)
  }, [])

  const [state, setState] = useState({
    active: false,
  });

  const navClickHandler = () => {
    if (!state.active) {
      ref.current.style.display = "block";
      size.current.style.height = "25rem";
      setState({ ...state, active: true });
    } else {
      ref.current.style.display = "none";
      size.current.style.height = "4.5rem";
      setState({ ...state, active: false });
    }
  };

  return (
    <div>
      <ToastContainer
        className="white text-center text-capitalize"
        hideProgressBar
        autoClose={2000}
        position="top-center"
        closeOnClick
        draggable
        margin-top="-50px"
        zIndex="9999999"
      />
      <nav css={CSS} ref={size}>
        <Link className="under" to="/">
          <div className="logo">
            <img src={bank} />
          <div className="logo__text">
            <span>Vardhan</span>
            <span>Bank</span>
          </div>
          </div>
        </Link>
      <button onClick={navClickHandler}>
        Menu{" "}
        {!state.active ? (
          <span id="open">
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
        ) : (
          <span id="close">
            <ion-icon name="remove-circle-outline"></ion-icon>
          </span>
        )}
      </button>
      <div className="nav__links" ref={ref}>
        <ul>
          <li>
            <Link className="under" to="/">Home</Link>
            <span className="seperator"> </span>
          </li>
          <li>
            <Link className="under" to="/create-user">Add Customer</Link>
            <span className="seperator"> </span>
          </li>
          <li>
            <Link className="under" to="/transfer">Transfer Money</Link>
            <span className="seperator"> </span>
          </li>
          <li>
            <Link className="under" to="/all-our-customers">All Customers</Link>
            <span className="seperator"> </span>
          </li>
          <li>
            <Link className="under" to="/transactions-history">Transaction History</Link>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
}

const CSS = css`
  height: 4.5rem;
  background: #b92b27;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: var(--powder-blue);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--powder-blue);
  }

  .logo {
    display: flex;
    width: 200px;
    height: 2.5rem;
    padding-left: 1rem;

    .logo-ico {
      color: var(--sky-blue-crayola);
      font-size: 2.5rem;
    }

    .logo__text {
      font-family: "Raleway", sans-serif;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;
      margin-left: 5px;
      padding-left: 5px;
      font-size: 18px;
      border-left: 2px solid var(--powder-blue);
    }
  }

  .under {
    text-decoration:none;
  }

  button {
    display: none;
  }

  .nav__links {
    font-family: "Roboto", sans-serif;
    justify-self: flex-end;
    padding-right: 1rem;

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        a {
          margin-left: 3px;
          padding: 10px 20px;
          color: var(--powder-blue);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        a:hover {
          background-color: var(--blue-green);
          color: var(--navy-blue);
        }

        @media screen and (max-width: 880px) {
          a {
            padding: 18px 5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: unset;
    height: 4.5rem;

    .logo {
      margin-top: 1rem;
      margin-left: 1rem;
      padding: 0;
    }

    button {
      display: block;
      position: absolute;
      width: 95px;
      top: 0.9rem;
      right: 1rem;
      padding: 10px 20px;
      border: 2px solid var(--sky-blue-crayola);
      border-radius: 4px;
      background: transparent;
      color: var(--powder-blue);
      display: flex;
      align-items: center;
      justify-content: space-between;

      #close,
      #open {
        font-size: 16px;
      }
    }

    .nav__links {
      padding: 0;
      width: 100%;
      display: none;
      ul {
        flex-direction: column;
        padding: 0;

        .seperator {
          display: none;
        }
        li {
          padding: 20px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export default Navbar;
