import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="leftAngel"></div>

        <div className="left">
          <h1 className="welcome">Welcome.</h1>
          <div className="left-desc">
            <div className="hr_row"></div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, maiores provident. Voluptates qui nostrum earum
                nobis incidunt iste.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore unde repellendus amet ullam ratione assumenda?
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className="project">Projects</h1>
          <div className="angleSmall"></div>
          <div className="projectList">
            <ul>
              <li>
                <a href="https://mdrahed2023.github.io/greeny-food/">
                  Greeny foods
                </a>
              </li>
              <li>
                <a href="#">Bd tools limited </a>
              </li>
              <li>
                <a href="#">Lanka Bangla exchange</a>
              </li>
              <li>
                <a href="#">facebook bd limited</a>
              </li>
              <li>
                <a href="#">pran rfl sales system</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightAngel"></div>
      </div>
    </div>
  );
}

export default App;
