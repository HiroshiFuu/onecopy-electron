import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  handleFooterClick = () => {
    window.openExternalUrl('https://github.com/HiroshiFuu');
  }

  render() {
    return (
      <React.Fragment>
          <div className="footer-copyright">
            <span>© 2021</span>
            <a href="https://icons8.com/" className="icon8">Icons by Icons8</a>
            <span className="text-darken-4 right clickable" onClick={this.handleFooterClick}>Made With 💖 by FENG Hao</span>
          </div>
      </React.Fragment>
    );
  }
}

export default Footer;