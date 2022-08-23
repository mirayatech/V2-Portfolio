import { BiChevronRight } from "react-icons/bi";
import "/src/styles/Hello.css";

export function Hello() {
  return (
    <section className="hello">
      <div className="intro">
        <div className="intro__text">
          <h1>Hello!</h1>
          <h2>I am Miraya</h2>
          <h2>front-end developer</h2>
        </div>

        <div className="intro__code">
          <p>// write the code below to continue:</p>
          <label className="intro__code--wrapper">
            <BiChevronRight className="inro__code--icon" />
            <input type="text" placeholder="whois" />
          </label>
        </div>
      </div>
    </section>
  );
}
