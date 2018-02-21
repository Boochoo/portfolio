import React from 'react';

import { Header } from '../components/Header';

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card Header__content">
          <div className="card__content skills__wrapper">
            <div className="card__title">Skills</div>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Day to Day Involvement
                <ul>
                  <li className="card__text card__text-group">JavaScript</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">CSS/SASS</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">HTML</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">jQuery</li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Libraries and Frameworks
                <ul>
                  <li className="card__text card__text-group">
                    Angular/AngulaJS
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">ReactJS</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">SailsJS</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">Cordova</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">MEAN</li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Projects done while at School
                <ul>
                  <li className="card__text card__text-group">
                    Säbämestari cross platform mobile app as a thesis_project
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    a chat application named ShutApp which is made with sailJS
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Currently learning
                <ul>
                  <li className="card__text card__text-group">NodeJS</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">Docker</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    Functional Programming
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Additional non tech related skills
                <ul>
                  <li className="card__text card__text-group">
                    Music Arrangement and composition
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">Song writing</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    Such a sociable guy
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
