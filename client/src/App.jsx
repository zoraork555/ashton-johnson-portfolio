// run using 'npm run dev' in client folder

import './App.css'
import './styles/Home.css'

function App() {
    return (
    <main className="main" style={{width: "100%"}}>
      <div className="container">
        <div className="header">
          <h2 className="title">
            {" "}
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
                Bachelor's of Science in Computer Science &mdash; May 2022
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
                Master's of Science in Computer Science &mdash; Dec 2023
              </p>
              <p>
                GPA: 3.4
              </p>
            </div>
          </a>
        </div>

        <div className="header">
          <h2 className="title">
            {" "}
            <span className="gradient-text-2">
              <a target="_blank" rel="noopener noreferrer">
                Experience
              </a>
            </span>
          </h2>
        </div>

        <div>
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-3">Torch Technologies</h2>
              <p>
                Made web-tools
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
