import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
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
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/mirayatech" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.instagram.com/mirayatech/" target="_blank">
          <FiInstagram />
        </a>
      </aside>
      <aside className="footer__time">
        <p> {time}</p>
        <p>{date}</p>
      </aside>
    </footer>
  );
}
