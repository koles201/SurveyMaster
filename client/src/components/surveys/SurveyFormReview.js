import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = (props) => {
    const reviewFields = FIELDS.map((field, index) => ( 
        <div key={index}>
            <label>{field.label}</label>
            <div>{props.formValues[field.name]}</div>
        </div> ));

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {reviewFields}
            </div>
            <button className="yellow darken-3 btn-flat white-text" onClick={props.onCancel}> Back </button>
            <button className="white-text green btn-flat right" onClick={() => props.submitSurvey(props.formValues, props.history)}> 
                Send Survey 
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};



function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));