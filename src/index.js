import './App.scss';

import * as Survey from 'survey-react';

import React from 'react';
import ReactDOM from 'react-dom';
import SURVEY_DATA from './data/survey.js';
import SurveyComponent from './Components/SurveyComponent';
import jsSHA from 'jssha';
import logo from './assets/logo.jpg';

const surveyModel = new Survey.Model(SURVEY_DATA);

// for debugging only
// window.survey = surveyModel

function createSurveyVersion(data) {
    // create survey version # by hashing stringified survey data
    const shaObj = new jsSHA('SHA-1', 'TEXT');
    shaObj.update(JSON.stringify(data));
    return shaObj.getHash('HEX');
}

ReactDOM.render(
    <React.StrictMode>
        <div className="app">
            <img src={logo} className="logo" />
            <h1>Record seal eligibility screener</h1>
            <SurveyComponent
                surveyModel={surveyModel}
                version={createSurveyVersion(SURVEY_DATA)}
            />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
