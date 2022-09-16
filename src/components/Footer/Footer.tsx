import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
export function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const time = `${current.getHours()}:${current.getMinutes()}`;

  return (
    <footer className="footer">
      <aside className="footer__socials">
        <p>find me in:</p>
        <a
          href="https://www.linkedin.com/in/miraya-abrodi-a48382237/"
          target="_blank"
          aria-label="Follow me on LinkedIn"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
        <a
          href="https://github.com/mirayatech"
          target="_blank"
          aria-label="Follow me on GitHub"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/mirayatech/"
          target="_blank"
          aria-label="Follow me on Instagram"
        >
          <BsInstagram aria-hidden="true" />
        </a>
      </aside>
      <aside className="footer__time">
        <p aria-label="current time"> {time}</p>
        <p aria-label="current date">{date}</p>
      </aside>
    </footer>
  );
}
