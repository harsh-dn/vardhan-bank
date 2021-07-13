/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import Slide from "./Slide";
import his from './images/waiting-list.png';
import cus from './images/entrepreneur-businessman.png';
import cuss from './images/society.png';
import tra from './images/pay-money.png';
import bank from './images/hand-money-rupee-coin.svg';


function Home() {
  return (
    <div className="home" css={CSS}>
      <div className="banner">
        <div className="headline">
          <h1>Welcome to Vardhan Bank!</h1>
          <p>एक अटूट बंधन</p>
        </div>
        <div className="image">
          <img src={bank} />
        </div>
      </div>
      <div style={{ marginBottom: '5rem' }}>
        <Slide />
      </div>
      <div className="services" id="services">
        <Link className="under" to="/all-our-customers">
          <div className="item">
            <div className="image">
              <img style={{ width: "40%", margin: 'auto' }} src={cuss} />
            </div>
            <div className="title">
              <h4>All Customers</h4>
            </div>
          </div>
        </Link>
        <Link className="under" to="/transfer">
          <div className="item">
            <div className="image">
              <img style={{ width: "40%", margin: 'auto' }} src={tra} />
            </div>
            <div className="title">
              <h4>Transfer Money</h4>
            </div>
          </div>
        </Link>
      </div>
      <div className="services" id="services">
        <Link className="under" to="/create-user">
          <div className="item">
            <div className="image">
              <img style={{ width: "40%", margin: 'auto' }} src={cus} />
            </div>
            <div className="title">
              <h4>Add Customer</h4>
            </div>
          </div>
        </Link>
        <Link className="under" to="/transactions-history">
          <div className="item">
            <div className="image">
              <img style={{ width: "40%", margin: 'auto' }} src={his} />
            </div>
            <div className="title">
              <h4>Transaction History</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const CSS = css`
  font-family: "Roboto", sans-serif;
  background: #FC5C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 35vh;
    color: var(--navy-blue);

    .headline {
      margin-left: 100px;
      flex: 0.8;
      h1 {
        font-size: 38px;
        font-weight: 900;
      }
      p {
        color: var(--powder-blue);
        font-size: 20px;
        font-weight: 800;
      }
    }

    .image {
      width:20rem;
      padding:0 5rem;
      position: unset;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .under{
    text-decoration:none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 780px) {
    .banner {
      flex-direction: column;
      justify-content: space-around;
      height: 60vh;

      .headline {
        margin-left: 10px;
        flex: unset;
        h1 {
          font-size: 56px;
        }
      }

      .image {
        position: unset;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .services__banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-;
    background: rgba(255, 255, 255, 0.3);

    h1 {
      font-size: 78px;
      font-family: "Marck Script", cursive;
      color: var(--dark-cornflower-blue);
    }
    a {
      color: var(--dark-cornflower-blue);
      padding: 0px 2.5px;
      border-radius: 180px;
      background: var(--blue-green);
      box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.3s ease;

      :hover {
        color: var(--navy-blue);
        background: var(--power-blue);
        transform: scale(1.4);
        box-shadow: unset;
        -webkit-box-shadow: unset;
        -moz-box-shadow: unset;
      }

      ion-icon {
        padding-top: 3px;
        font-size: 50px;
      }
    }
  }

  .services {
    padding-top: 25px;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      color: var(--powder-blue);
      padding: 10px 0;
      .item {
        height: 100%;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: white;
        border-radius: 10px;
        padding: 0 20px;
        transition: all 0.3s ease;
        margin: 0 1rem;

        .title {
          color: #CC008B;
        }
      }

      .image{
        align-items:center;
        position: unset;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item:hover {
        transform: scale(1.01);
        box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
      }

      @media screen and (max-width: 1100px) {
        .item {
          width: 200px;
        }
      }
    }
  }

  @media screen and (max-width: 625px) {
    .services__banner {
      h1 {
        font-size: 58px;
      }
    }
    .services {
      height: 80vh;
      flex-direction: column;
      padding-bottom: 10px;

      a {
        width: 100%;
        max-width: 350px;
        justify-content: center;

        .item {
          width: 80%;
        }
      }
    }
  }
`;

export default Home;
