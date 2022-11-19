const { Schema, model } = require('mongoose');
const { questionTypeSchema } = require('./QuestionType')
const [optionsSchema] = require('./Options')


const QuestionSchema = new Schema(
    {
        questionId: {
            type: Number,
            required: true,
        },
        
    }
)