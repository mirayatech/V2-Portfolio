export function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const time = `${current.getHours()}:${current.getMinutes()}`;

  return (
    <footer className="footer">
      <aside className="footer__socials"></aside>
      <aside className="footer__time">
        <p> {time}</p>
        <p>{date}</p>
      </aside>
    </footer>
  );
}
