import { useRef } from "react";
import { motion } from "framer-motion";
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
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "-20px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  duration: 0.6,
                },
              },
            }}
          >
            Hello!
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "-10px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  duration: 0.6,
                },
              },
            }}
          >
            I'm Miraya
          </motion.h2>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "-12px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  duration: 0.6,
                },
              },
            }}
          >
            front-end developer
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: "-12px",
              opacity: 0,
            },
            visible: {
              translateY: "0px",
              opacity: 1,
              transition: {
                delay: 0.8,
                type: "spring",
                duration: 0.6,
              },
            },
          }}
          className="intro__code"
        >
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
        </motion.div>
      </div>

      <motion.img
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          },
        }}
        src="/src/images/desk.png"
        alt="Desk set"
      />
    </section>
  );
}
