const { Schema, model } = require('mongoose');
const { questionSchema } = require('./Question')
const SurveySchema = new Schema(
    {
        surveyId: {
            type: Number,
            required: true,
        },
        questionType: [questionTypeSchema],
        question: [questionSchema],
        options: [optionsSchema]
    }
)

