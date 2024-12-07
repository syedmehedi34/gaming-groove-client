import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 dark:bg-dark border-t border-t-white/15">
      <nav className="dark:text-white/90">
        <h6 className="footer-title">Services</h6>
        <p className="link link-hover">Our Services</p>
        <p className="link link-hover">Designer</p>
        <p className="link link-hover">Our Games</p>
        <p className="link link-hover">Advertisement</p>
      </nav>
      <nav className="dark:text-white/90">
        <h6 className="footer-title">Company</h6>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Web Portal</p>
        <p className="link link-hover">Developers</p>
      </nav>
      <nav className="dark:text-white/90">
        <h6 className="footer-title">Legal</h6>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </nav>
      <div className="dark:text-white/90">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text dark:text-white/90">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item placeholder:dark:text-dark/60 text-dark/60"
            />
            <button className="btn btn-primary dark:btn-neutral join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </div>
    </footer>
  );
};

export default Footer;
