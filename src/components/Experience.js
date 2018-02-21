import React from 'react';
import { Header } from '../components/Header';

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card Header__content">
          <div className="card__content">
            <div className="card__title">Experience</div>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Currently working
                <ul>
                  <li className="card__text card__text-group">At Apprix Oy</li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    as a Frontend Developer
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    Started on December 2016
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Thesis Project
                <ul>
                  <li className="card__text card__text-group">
                    At Game Refinery
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    Involved in a Data Visualisation based project with
                    AngularJS
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    From August 2016 up to Decemeber 2016
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="skills__list">
              <li className="card__text card__text-group">
                Thesis Project
                <ul>
                  <li className="card__text card__text-group">
                    At Metropolia University of Applied Sciences
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    cross platform mobile application for the Finnish floorball
                    Association
                  </li>
                </ul>
                <ul>
                  <li className="card__text card__text-group">
                    From August 2015 up to January 2016
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
