/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import bank from './images/hand-money-rupee-coin.svg';

function Footer() {
  return (
    <div className="footer" css={CSS}>
      <Link className="under" to="/">
        <div className="logo">
          <img src={bank} />
          <div className="logo__text">
            <span>Vardhan</span>
            <span>Bank</span>
          </div>
        </div>
      </Link>
      <div className="sign">
        Made with ❤️ By{" "}
        <a className="under"
          href="https://harsh-vardhan.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Harsh.
        </a>
      </div>

      <div className="copyright">
        &#169; Copyright 2021-2022.
      </div>
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
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  a {
    color: var(--powder-blue);
  }
  .under {
    text-decoration:none;
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

  .sign {
    a {
      color: var(--sky-blue-crayola);
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--powder-blue);
    }
  }

  .copyright {
    text-align: center;
  }

  @media screen and (max-width: 710px) {
    flex-direction: column;
    height: 25vh;
  }
`;

export default Footer;
