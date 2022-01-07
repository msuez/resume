
import './ResumeApp.css';

function ResumeApp() {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-12 col-sm-12">
          <h1>Matias Suez - Fullstack developer</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <h3>Stack of knowledge and expertise</h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <ul>
                  <li>Web</li>
                  <ul>
                    <li>Mongo/MySQL</li>
                    <li>Express</li>
                    <li>React/Angular</li>
                    <li>Node</li>
                    <li>Typescript</li>
                    <li>Jest</li>
                  </ul>
                  <li>Mobile</li>
                  <ul>
                    <li>React native</li>
                  </ul>
                  <li>Blockchain</li>
                  <ul>
                    <li>Solidity</li>
                    <li>Rust</li>
                    <li>Golang</li>
                  </ul>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul>
                  <li>Architecture</li>
                  <ul>
                    <li>MVC</li>
                    <li>Api rest</li>
                    <li>TDD</li>
                    <li>HTTP</li>
                    <li>WebSockets</li>
                    <li>Web 3.0</li>
                  </ul>
                  <li>DevOps</li>
                  <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Nginx/Apache</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <h3>Contact info</h3>
          <ul>
            <li>Name: Matias</li>
            <li>Surname: Suez</li>
            <li>Email: <a href="mailto:msuez.dev@gmail.com">msuez.dev@gmail.com</a></li>
            <li>Phone: <a href="tel:+54 9 11 6928 1176">+54 9 11 6928 1176</a></li>
            <li>Language: Spanish / English</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <h3>Contact form</h3>
          <form>
            <label for="email">Email:</label>
            <div className="form-group">
              <input type="email" id="email" className="form-control" />
            </div>
            <label for="comment" className="mt-3">Comment:</label>
            <div className="form-group">
              <input type="text" id="comment" className="form-control" />
            </div>
            <button className="btn btn-primary btn-lg mt-3">
              Send comment
            </button>
          </form>
        </div>
        <div className="col-md-5 col-sm-12">
          <h3> Repositories <a href="https://github.com/msuez" className="fs-5">all</a>.</h3>
          <ul>
            <li>Calendar - <a href="https://github.io/msuez/resume">repo</a>.</li>
            <li>Ticket - <a href="https://github.io/msuez/resume">repo</a>.</li>
            <li>GPS - <a href="https://github.io/msuez/resume">repo</a>.</li>
            <li>Chat - <a href="https://github.io/msuez/resume">repo</a>.</li>
            <li>Exchange - <a href="https://github.io/msuez/resume">repo</a>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumeApp;
