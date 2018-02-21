import React from 'react';
import { Header } from '../components/Header';

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card Header__content">
          <div className="card__content">
            <div className="card__title">Education</div>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Bachelor of Art
                <ul>
                  <li className="card__text card__text-group">
                    Music composition and performance.
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    From Yared School of Music, AAU.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Bachelory of Engineering
                <ul>
                  <li className="card__text card__text-group">
                    Media Engineering
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    From Metropolia University of applied sciences
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
