import React, { Component } from 'react';
import 'normalize.css';
import './save.css';

class FullpageAccordion extends Component {
  handleClick = e => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      if (panel !== this) {
        panel.classList.remove('open');
        panel.classList.remove('open-active');
      }
    });
    e.target.classList.toggle('open');
    e.target.classList.toggle('open-active');
  };

  render() {
    const { data, height } = this.props;

    return (
      <div className="panels">
        {data.map(item => (
          <div
            type="button"
            key={item.itemId}
            className="panel"
            style={{
              backgroundImage: `url("${item.imageUrl}")`,
              height: height || null,
            }}
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <p>{item.top}</p>
            <p>{item.middle}</p>
            <p>
              <a
                style={{ zIndex: 20 }}
                href="https://www.google.com"
                alt={item.title}
              >
                {item.bottom}
              </a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default FullpageAccordion;
