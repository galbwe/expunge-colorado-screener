import * as Survey from 'survey-react';

import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SURVEY_DATA from '../../data/survey';
import SurveyComponent from '../SurveyComponent';
import jsSHA from 'jssha';

Enzyme.configure({ adapter: new Adapter() });

function createSurveyVersion(data) {
    // create survey version # by hashing stringified survey data
    const shaObj = new jsSHA('SHA-1', 'TEXT');
    shaObj.update(JSON.stringify(data));
    return shaObj.getHash('HEX');
}

test('survey renders', () => {
    const surveyModel = new Survey.Model(SURVEY_DATA);
    const component = shallow(
        <SurveyComponent
            surveyModel={surveyModel}
            version={createSurveyVersion(SURVEY_DATA)}
        />
    );
    expect(component).toMatchSnapshot();
});
