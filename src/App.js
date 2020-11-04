import React from "react";
import logo from "./assets/logo.svg";
import mockups from "./assets/image-mockups.png";
import budgeting from "./assets/icon-budgeting.svg";
import api from "./assets/icon-api.svg";
import online from "./assets/icon-online.svg";
import onboarding from "./assets/icon-onboarding.svg";
import currency from "./assets/image-currency.jpg";
import restaurant from "./assets/image-restaurant.jpg";
import plane from "./assets/image-plane.jpg";
import confetti from "./assets/image-confetti.jpg";
import logoWhite from "./assets/logo-invert.svg";
import  {ReactComponent as Facebook} from "./assets/icon-facebook.svg";
import  {ReactComponent as Youtube} from "./assets/icon-youtube.svg";
import  {ReactComponent as Twitter} from "./assets/icon-twitter.svg";
import  {ReactComponent as Pinterest} from "./assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "./assets/icon-instagram.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button> Request Invite </button>
      </header>

      <section className="sectionOne">
      <img src={mockups} alt="mockups" className="mockups" />
        <div>
          <h1> Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button> Request Invite </button>
        </div>
      
      </section>

      <section className="sectionTwo">
        <div className="text-area">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="group-itens">
          <div className="item">
            <img src={online} alt="" />

            <h4>Online Banking</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="item">
            <img src={budgeting} alt="" />
            <h4>Simple Budgeting</h4>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>

          <div className="item">
            <img src={onboarding} alt="" />

            <h4> Fast Onboarding</h4>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>

          <div className="item">
            <img src={api} alt="" />
            <h4>Open API</h4>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
      <section className="sectionTree">
        <h1>Latest Articles</h1>
        <div className="group-itens">
          <div className="item">
            <img src={currency} alt="" />
            <span>By Claire Robinson</span>
            <h4>Receive money in any currency with no fees</h4>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
          <div className="item">
            <img src={restaurant} alt="" />
            <span>By Wilson Hutton</span>
            <h4>Treat yourself without worrying about money</h4>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
          <div className="item">
            <img src={plane} alt="" />
            <span>By Wilson Hutton</span>
            <h4>Take your Easybank card wherever you go</h4>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>

          <div className="item">
            <img src={confetti} alt="" />
            <span>By Claire Robinson</span>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="group-footer">
          <img src={logoWhite} alt="Logo" className="logo" />

          <div className="group-icons">
            <Facebook className="icon" />
            <Youtube className="icon" />
            <Twitter  className="icon" />
            <Pinterest className="icon" />
            <Instagram className="icon"/>
          </div>
        </div>
        <div className="group-footer">
         <a href="#">About Us</a>
         <a href="#">Contact</a>
         <a href="#">Blog</a>
        </div>
        <div className="group-footer">
        <a href="#">Careers</a>
         <a href="#">Support</a>
         <a href="#">Privacy Policy</a>
        </div>
        <div className="group-footer">
        <button> Request Invite </button>
        <span className="copy-right">@Easybank. All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
