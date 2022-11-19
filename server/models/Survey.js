const { Schema, model } = require('mongoose');
const { questionTypeSchema } = require('./QuestionType')
const { questionSchema } = require('./Question')
const [optionsSchema] = require('./Options')
const SurveySchema = new Schema(
    {
        surveyId: {
            type: NUMBER,
            required: true,
        },
        questionType: [questionTypeSchema],
        question: [questionSchema],
        options: [optionsSchema]
    }
)

