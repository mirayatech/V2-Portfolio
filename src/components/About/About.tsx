import { AnimatePresence, motion } from "framer-motion";
import { BsFillMarkdownFill } from "react-icons/bs";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";

import { FaFolder } from "react-icons/fa";

import "../../styles/About.css";
import { useState } from "react";

export function About() {
  const [showExtra, setShowExtra] = useState(false);
  const [showLanguage, setShowlanguage] = useState(true);
  const [showFrameLib, setShowFrameLib] = useState(false);
  const [showFreeTime, setShowFreeTime] = useState(false);

  const [hamburger, setHamburger] = useState(false);

  const ToggleMode = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="about">
      <div className="about__primary">
        <motion.div
          className="line__numbers"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <p style={{ opacity: 0.05 }} className="number">
            23
          </p>
          <p style={{ opacity: 0.01 }} className="number">
            24
          </p>
          <p style={{ opacity: 0.01 }} className="number">
            25
          </p>
          <p style={{ opacity: 0.01 }} className="number">
            26
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            27
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            28
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            29
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            31
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            32
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            33
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            34
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            35
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            36
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            37
          </p>
          <p style={{ opacity: 0.3 }} className="number">
            38
          </p>
          <p style={{ opacity: 0.6 }} className="number">
            39
          </p>
          <p style={{ opacity: 0.8 }} className="number">
            40
          </p>
          <p className="number">41</p>
          <p className="number">42</p>
          <p className="number">43</p>
          <p className="number">44</p>
          <p className="number">45</p>
          <p className="number">46</p>
          <p className="number">47</p>
          <p className="number">48</p>
          <p className="number">49</p>
          <p className="number">50</p>
          <p className="number">51</p>
          <p style={{ opacity: 0.9 }} className="number">
            52
          </p>
          <p style={{ opacity: 0.6 }} className="number">
            53
          </p>
          <p style={{ opacity: 0.3 }} className="number">
            54
          </p>
          <p style={{ opacity: 0.1 }} className="number">
            55
          </p>
        </motion.div>

        <div className="large__line"></div>

        <motion.div
          className="wrapper"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2.5,
              },
            },
          }}
        >
          <p>/*</p>
          <div className="small__line"></div>
          <p>*/</p>
        </motion.div>

        <motion.div
          className="about__text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2.5,
              },
            },
          }}
        >
          <h1>About me</h1>
          <p>
            {" "}
            I'm a 19 year old self-taught front-end developer based in Germany.
            I discovered my passion for web development in 2020. What put me on
            this journey is that I find it exciting to keep learning new things
            and face challenges that I am unfamiliar with.
          </p>
        </motion.div>
      </div>
      <div onClick={ToggleMode}>
        {hamburger ? <FiX className="bars" /> : <FiMenu className="bars" />}
      </div>
      <div className={hamburger ? "hamburger menuOpen" : "hamburger menuClose"}>
        <div className="about__secondary--hamburger">
          <h2>Explorer</h2>
          <div className="wrapper-1">
            <span className="arrow">
              <FiChevronDown />
            </span>
            <p>Intrest & Skills</p>
          </div>

          <div className="wrapper-2">
            <div
              onClick={() => setShowlanguage(!showLanguage)}
              className="title"
            >
              <span className="arrow">
                {showLanguage ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              <span className="folder color-1">
                <FaFolder />
              </span>
              <p>Language</p>
            </div>
            <AnimatePresence>
              {showLanguage && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={{
                    hidden: {
                      y: "-20px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.5,
                      },
                    },
                    go: {
                      y: "-20px",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.3,
                      },
                    },
                  }}
                  className="list"
                >
                  {" "}
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; html.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; css.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; javascript.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; typescript.md
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="wrapper-2">
            <div
              onClick={() => setShowFrameLib(!showFrameLib)}
              className="title"
            >
              <span className="arrow">
                {showFrameLib ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              <span className="folder color-2">
                <FaFolder />
              </span>
              <p>Frameworks & Libraries</p>
            </div>

            <AnimatePresence>
              {showFrameLib && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={{
                    hidden: {
                      y: "-20px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.5,
                      },
                    },
                    go: {
                      y: "-20px",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.3,
                      },
                    },
                  }}
                  className="list"
                >
                  {" "}
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; react.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; sass.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; tailwind.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; material-ui.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; framer-motion.md
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="wrapper-2">
            <div onClick={() => setShowExtra(!showExtra)} className="title">
              <span className="arrow">
                {showExtra ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              <span className="folder color-3">
                <FaFolder />
              </span>
              <p>Extra</p>
            </div>
            <AnimatePresence>
              {showExtra && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={{
                    hidden: {
                      y: "-20px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.5,
                      },
                    },
                    go: {
                      y: "-20px",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.3,
                      },
                    },
                  }}
                  className="list"
                >
                  {" "}
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; git.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; accessibility.md
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="wrapper-2">
            <div
              onClick={() => setShowFreeTime(!showFreeTime)}
              className="title"
            >
              <span className="arrow">
                {showFreeTime ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              <span className="folder color-4">
                <FaFolder />
              </span>
              <p>Free Time</p>
            </div>
            <AnimatePresence>
              {showFreeTime && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="go"
                  variants={{
                    hidden: {
                      y: "-20px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.1,
                        duration: 0.5,
                      },
                    },
                    go: {
                      y: "-20px",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        delay: 0.1,
                        duration: 0.3,
                      },
                    },
                  }}
                  className="list"
                >
                  {" "}
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; reading.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; work-out.md
                  </p>
                  <p>
                    <BsFillMarkdownFill />
                    &nbsp; building-side-projects.md
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            x: "80px",
            opacity: 0,
          },
          visible: {
            x: "0",
            opacity: 1,
            transition: {
              type: "spring",
              delay: 2,
            },
          },
        }}
        className="about__secondary"
      >
        <h2>Explorer</h2>
        <div className="wrapper-1">
          <span className="arrow">
            <FiChevronDown />
          </span>
          <p>Intrest & Skills</p>
        </div>

        <div className="wrapper-2">
          <div onClick={() => setShowlanguage(!showLanguage)} className="title">
            <span className="arrow">
              {showLanguage ? <FiChevronDown /> : <FiChevronRight />}
            </span>
            <span className="folder color-1">
              <FaFolder />
            </span>
            <p>Language</p>
          </div>
          <AnimatePresence>
            {showLanguage && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                  hidden: {
                    y: "-20px",
                    opacity: 0,
                  },
                  visible: {
                    y: "0",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.5,
                    },
                  },
                  go: {
                    y: "-20px",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.3,
                    },
                  },
                }}
                className="list"
              >
                {" "}
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; html.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; css.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; javascript.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; typescript.md
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="wrapper-2">
          <div onClick={() => setShowFrameLib(!showFrameLib)} className="title">
            <span className="arrow">
              {showFrameLib ? <FiChevronDown /> : <FiChevronRight />}
            </span>
            <span className="folder color-2">
              <FaFolder />
            </span>
            <p>Frameworks & Libraries</p>
          </div>

          <AnimatePresence>
            {showFrameLib && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                  hidden: {
                    y: "-20px",
                    opacity: 0,
                  },
                  visible: {
                    y: "0",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.5,
                    },
                  },
                  go: {
                    y: "-20px",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.3,
                    },
                  },
                }}
                className="list"
              >
                {" "}
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; react.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; sass.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; tailwind.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; material-ui.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; framer-motion.md
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="wrapper-2">
          <div onClick={() => setShowExtra(!showExtra)} className="title">
            <span className="arrow">
              {showExtra ? <FiChevronDown /> : <FiChevronRight />}
            </span>
            <span className="folder color-3">
              <FaFolder />
            </span>
            <p>Extra</p>
          </div>
          <AnimatePresence>
            {showExtra && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                  hidden: {
                    y: "-20px",
                    opacity: 0,
                  },
                  visible: {
                    y: "0",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.5,
                    },
                  },
                  go: {
                    y: "-20px",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      delay: 0.2,
                      duration: 0.3,
                    },
                  },
                }}
                className="list"
              >
                {" "}
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; git.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; accessibility.md
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="wrapper-2">
          <div onClick={() => setShowFreeTime(!showFreeTime)} className="title">
            <span className="arrow">
              {showFreeTime ? <FiChevronDown /> : <FiChevronRight />}
            </span>
            <span className="folder color-4">
              <FaFolder />
            </span>
            <p>Free Time</p>
          </div>
          <AnimatePresence>
            {showFreeTime && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="go"
                variants={{
                  hidden: {
                    y: "-20px",
                    opacity: 0,
                  },
                  visible: {
                    y: "0",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      delay: 0.1,
                      duration: 0.5,
                    },
                  },
                  go: {
                    y: "-20px",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      delay: 0.1,
                      duration: 0.3,
                    },
                  },
                }}
                className="list"
              >
                {" "}
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; reading.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; work-out.md
                </p>
                <p>
                  <BsFillMarkdownFill />
                  &nbsp; building-side-projects.md
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
