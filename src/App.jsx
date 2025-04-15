// run using 'npm run dev' in client folder

import './App.css'
import './styles/Home.css'

function App() {
  return (
    <main className="main" style={{width: "100%"}}>
      <div className="container">
        <div className="header">
          <h2 className="title">
            <span className="gradient-text-2">
              <a target="_blank" rel="noopener noreferrer">
                Education
              </a>
            </span>
          </h2>
        </div>

        <div className="blocks">
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-1">University of Alabama</h2>
              <p>
                Bachelor of Science in Computer Science &mdash; May 2022
              </p>
              <p>
                GPA: 3.92
              </p>
              <p>
                Minor in Mathematics
              </p>
            </div>
          </a>

          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-2">University of Alabama</h2>
              <p>
                Master of Science in Computer Science &mdash; Dec 2023
              </p>
              <p>
                GPA: 3.4
              </p>
            </div>
          </a>
        </div>

        <div className="header">
          <h2 className="title">
            <span className="gradient-text-2">
              <a target="_blank" rel="noopener noreferrer">
                Professional Experience
              </a>
            </span>
          </h2>
        </div>

        <div>
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-3">University of Alabama, Computer Science Department</h2>
              <h4>Graduate Student Researcher</h4>
              <p>May 2023 - December 2023</p>
              <ul>
                <li>Connected SUMO transportation simulator to traffic controllers via Raspberry Pi to create digital twin of Tuscaloosa, AL.</li>
                <li>Furthered the ongoing research into this topic that will reduce traffic citywide.</li>
              </ul>
            </div>
          </a>
        </div>

        <div>
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-3">University of Alabama, English Department</h2>
              <h4>Web Developer</h4>
              <p>August 2022 - December 2022</p>
              <ul>
                <li>Built a corpus of essays for first-year students in English classes.</li>
                <li>The corpus contains essays written by previous students to serve as reference for how to write well.</li>
                <li>The site was launched at <a href="https://wavelength.as.ua.edu/" target="_blank">wavelength.as.ua.edu.</a></li>
              </ul>
            </div>
          </a>
        </div>

        <div>
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-3">Torch Technologies Inc.</h2>
              <h4>Systems Analysis and Simulation Engineer, Intern</h4>
              <p>May 2021 - August 2021, May 2022 - August 2022</p>
              <ul>
                <li>Collaborated with other analysis team members to develop three web apps for data visualization and interpretation using a full-stack environment with the Flask framework, Python, HTML, CSS, Javascript, React, and SQLite.</li>
                <li>Performed daily data analysis essential to functioning of IAMD-SIM flight simulator.</li>
                <li>Gained an understanding of weapon systems such as PATRIOT and PAC missile systems.</li>
              </ul>
            </div>
          </a>
        </div>

        <div className="header">
          <h2 className="title">
            <span className="gradient-text-2">
              <a target="_blank" rel="noopener noreferrer">
                Other Experience
              </a>
            </span>
          </h2>
        </div>

        <div>
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-3">University of Alabama, Ceramics Department</h2>
              <h4>Lab Assistant</h4>
              <p>August 2022 - December 2023</p>
              <ul>
                <li>Performed tasks necessary to the function of the studio - making clay, making glaze, keeping stock of ingredients, cleaning the studio.</li>
                <li>Assisted students and club members with their projects by helping them learn new techniques or by locating mistakes in and fixing their techniques.</li>
                <li>Worked sale events which involved interacting with customers, throwing pottery as a public demonstration, and keeping inventory stocked.</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
