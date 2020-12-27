import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ed Kearney</h2>
        <p><a href="mailto:ed@edkearney.com">ed@edkearney.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ed. I am a 2x YC Alumni, and
        the co-founder and CEO of <a href="https://boundarylayer.tech">Boundary Layer Technologies</a>. Before Boundary Layer I co-founded
        {' '}<a href="https://snappr.co">Snappr</a>
        , <a href="https://gowntown.com">GownTown</a>
        , <a href="https://tahdahproductions.com">Tah Dah Productions</a>
        , <a href="https://skepticalinvestments.biz">Skeptical Investments</a>
        , and dropped out of a Ph.D program at <a href="https://www.unsw.edu.au/">wherever the fuck I went to school</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ed D&apos;Angelo <Link to="/">edkearney.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
