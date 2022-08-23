import { useRef } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "/src/styles/Hello.css";

export function Hello(): JSX.Element {
  const navigate = useNavigate();

  const inputRef = useRef<any>(null);

  const getCode = () => {
    const input = inputRef.current;
    let inputValue = input.value;

    if (inputValue === "whois") {
      setTimeout(() => {
        navigate("/about");
      }, 300);
    }
  };

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
            <input
              ref={inputRef}
              onChange={getCode}
              type="text"
              placeholder="whois"
            />
          </label>
        </div>
      </div>

      <img
        src="https://cdn3d.iconscout.com/3d/free/thumb/responsive-device-3985350-3317738.png"
        alt=""
      />
    </section>
  );
}
