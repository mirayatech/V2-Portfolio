import { FiExternalLink, FiGithub } from "react-icons/fi";

export function Projects() {
  return (
    <div className="projects">
      <a href="https://github.com/mirayatech/E-Commerce" target="_blank">
        <div className="project">
          <div className="title">
            <h2>E-Commerce</h2>
            <div className="title__wrapper">
              <a
                href="https://github.com/mirayatech/E-Commerce"
                target="_blank"
              >
                <FiGithub />
              </a>{" "}
              <a href="https://mystore-ecommerce.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            A fully functional e-commerce application with stripe payment
            gateway.
          </p>
          <div className="language">
            React&nbsp;&nbsp;&nbsp;TypeScript&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Netflix-Clone" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Netflix Clone</h2>
            <div className="title__wrapper">
              <a
                href="https://github.com/mirayatech/Netflix-Clone"
                target="_blank"
              >
                <FiGithub />
              </a>{" "}
              <a href="https://netflix-mirayatech.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            Netflix clone build with react and typescript. User are able to mute
            and unmute the trailer video.
          </p>
          <div className="language">
            React&nbsp;&nbsp;&nbsp;TypeScript&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Note-App" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Note App</h2>
            <div className="title__wrapper">
              <a href="https://github.com/mirayatech/Note-App" target="_blank">
                <FiGithub />
              </a>{" "}
            </div>
          </div>
          <p>
            An app where you can take notes. User can use markdown language in
            the note app.
          </p>
          <div className="language">
            React&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;VS-Code
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Github-Finder" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Github Finder</h2>
            <div className="title__wrapper">
              <a
                href="https://github.com/mirayatech/Github-Finder"
                target="_blank"
              >
                <FiGithub />
              </a>{" "}
              <a href="https://ghfinder-phi.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            GitHub Finder makes it super easy to find any random GitHub user and
            see their work.
          </p>
          <div className="language">
            JavaScript&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Movie-App" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Movie App</h2>
            <div className="title__wrapper">
              <a href="https://github.com/mirayatech/Movie-App" target="_blank">
                <FiGithub />
              </a>{" "}
              <a href="https://movieflix-navy.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            A way to search for movies and see their rating , release date and
            summary.
          </p>
          <div className="language">
            JavaScript&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Anime-Quote" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Anime Quote</h2>
            <div className="title__wrapper">
              <a
                href="https://github.com/mirayatech/Anime-Quote"
                target="_blank"
              >
                <FiGithub />
              </a>{" "}
              <a href="https://anime-quotes-rho.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            Random Amine Quote Generator used to generate random quotes. Each
            time you click on the button, you’ll get a new anime quote.
          </p>
          <div className="language">
            JavaScript&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Tic-Tac-Toe" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Tic Tac Toe</h2>
            <div className="title__wrapper">
              <a
                href="https://github.com/mirayatech/Tic-Tac-Toe"
                target="_blank"
              >
                <FiGithub />
              </a>{" "}
              <a href="https://toxo-two.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>
            A Tic Tac Toe Game built with pure JavaScript. User plays against
            the computer.
          </p>
          <div className="language">
            JavaScript&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>

      <a href="https://github.com/mirayatech/Mitsuki" target="_blank">
        <div className="project">
          <div className="title">
            <h2>Mitsuki</h2>
            <div className="title__wrapper">
              <a href="https://github.com/mirayatech/Mitsuki" target="_blank">
                <FiGithub />
              </a>{" "}
              <a href="https://mitsuki-psi.vercel.app/" target="_blank">
                <FiExternalLink />
              </a>{" "}
            </div>
          </div>
          <p>A way for people to manage their tasks and take some notes.</p>
          <div className="language">
            JavaScript&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS
          </div>
        </div>
      </a>
    </div>
  );
}
