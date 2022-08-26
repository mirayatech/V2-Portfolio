import { motion } from "framer-motion";
import "../../styles/About.css";

export function About() {
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
    </div>
  );
}
