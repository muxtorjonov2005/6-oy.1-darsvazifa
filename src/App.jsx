import React from "react";
import "./App.css";
import "./fonts.css";
import './assets/fonts/manrope-v15-latin-500.woff2';
import './assets/fonts/manrope-v15-latin-600.woff2';
import './assets/fonts/manrope-v15-latin-700.woff2';
import './assets/fonts/manrope-v15-latin-800.woff2';
import playImg from "./assets/images/play.svg";
import iconImg from "./assets/images/icon.svg";
import oralcImg from './assets/images/oracle.svg'
import morpheusImg from './assets/images/mrpheus.svg';
import samsungImg from './assets/images/samsung.svg';
import mondayImg from './assets/images/monday.svg';
import segmentImg from './assets/images/segment.svg';

function App() {
  return (
    <div>

      <header className="back">
        <div className="header_container ">
          <div className="logo">
            <a id="logotip" href="#">
              ShapeVoice
            </a>
          </div>
          <div className="nav">
            <nav>
              <ul>
                <li>
                  <a href="#">Product</a>
                  <a href="#">
                    <img src={iconImg} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">Template</a>
                  <a href="#">
                    <img src={iconImg} alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </nav>
            <div className="sign">
              <a>Sign In</a>
              <a id="sign">Start Free</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="main_container container">
          <div className="info">
            <h1>Managing business payments has never been easier</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div className="but">
              <a href="#" id="see">
                Our Process
              </a>
              <a href="#" id="play">
                <div id="play_back">
                  <img src={playImg} alt="" />
                </div>
                <span>See How It Works</span>
              </a>
            </div>
          </div>
          <div className="regst">
            <h3>Get Started for Free</h3>
            <input type="email" name="" id="" placeholder="Email Address" />
            <input type="password" name="" id="" placeholder="Password" />
            <a>Get Started</a>
          </div>
        </div>
      </main>

      <div>
        <div className="sponser_container container">
          <h3>Trusted By Over 100+ Startups and freelance business</h3>
          <div className="spon">
          <a href="#">
            <img src={oralcImg} alt="" />
          </a>
          <a href="#">
            <img src={morpheusImg} alt="" />
          </a>
          <a href="#">
            <img src={samsungImg} alt="" />
          </a>
          <a href="#">
            <img src={mondayImg} alt="" />
          </a>
          <a href="#">
            <img src={segmentImg} alt="" />
          </a>
          </div>
        </div>
      </div>

      <div>
        <div className="believ_container container">
          <h3>Believing neglected so so allowance</h3>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
            <a href="#">We so opinion friends me message as delight.</a>
        </div>
      </div>

      <div>
        <div className="card_container container">
          <div className="card_block">
            <img src="" alt="" />
            <h4>Led Ask Possible Mistress</h4>
            <p>
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="card_block">
            <img src="" alt="" />
            <h4>Elegance Eat Likewise</h4>
            <p>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded incommode.
            </p>
          </div>
          <div className="card_block">
            <img src="" alt="" />
            <h4>Message Oram Nothing</h4>
            <p>
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer_container container">
          <h3>Track your crytpo portfolio on the best way possible</h3>
          <a>Check It Out</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
