import React from 'react';

import { Header } from '../components/Header';
import '../css/index.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card Header__content">
          <div className="card__content">
            <div className="card__title">Info</div>
            <ul>
              <li className="card__text card__text-group">
                Born and raised in the capital of Ethiopia, Addis Ababa.
              </li>
              <li className="card__text card__text-group">
                Passionate about Music and JavaScript.
              </li>
              <li className="card__text card__text-group">
                Went to a music School to follow a childhood dream of expressing
                oneself <br /> and surrounding through Art.
              </li>
              <li className="card__text card__text-group">
                Went to a Tech school to pursue a deeper interest of solving
                problems <br /> via logic and creative solutions.
              </li>
              <li className="card__text card__text-group">
                More info can be found in
                <ul>
                  <li className="card__text card__text-group">
                    Github:{' '}
                    <a className="info__link" href="https://github.com/boochoo">
                      https://github.com/boochoo
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    linkedin:
                    <a
                      className="info__link"
                      href="https://www.linkedin.com/in/ermias-asmelash-54b640aa/"
                    >
                      https://www.linkedin.com/in/ermias-asmelash-54b640aa/
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
