import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <p className="link link-hover">Our Services</p>
        <p className="link link-hover">Designer</p>
        <p className="link link-hover">Our Games</p>
        <p className="link link-hover">Advertisement</p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Web Portal</p>
        <p className="link link-hover">Developers</p>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </nav>
      <div>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </div>
    </footer>
  );
};

export default Footer;
