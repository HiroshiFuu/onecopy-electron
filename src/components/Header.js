import React from "react";
import "../css/materialize.css";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  handleAppQuit = () => {
    window.api.quitApp();
  }

  handleAppMinimize = () => {
    window.api.minimizeApp()
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper brown darken-3">
            <a className="brand-logo">One Copy 📋</a>
            <ul className="right">
              <li><a onClick={this.handleAppMinimize}><i className="material-icons">remove</i></a></li>
              <li><a onClick={this.handleAppQuit}><i className="material-icons">clear</i></a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;