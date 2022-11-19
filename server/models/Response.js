const { Schema, model } = require('mongoose')
const ResponseSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        answers: [
            {
                type: Boolean,
            }
        ],
        createdAt: {
            type: Date, default: Date.now,
            get: createdAtVal => {
                const newDate = new Date(createdAtVal)
                return `${new Date(newDate).getMonth() + 1}/${new Date(newDate).getDate()}/${new Date(newDate).getFullYear()}`
            }
        },

    }
)

//the username part of this model is so we can link them together, and fetch all the data that a single user has submitted
//we want to know when it was submitted
// we also want to know what they answered, though stored in boolean form we can have a staff side server/front end that can show us what all the gibberish means
//eventually we'd want this to be dynamic and accepting of multiple question types, but for the time crunch i opted for the check all that apply survey form
const Response = model('Response', ResponseSchema)
//for example of how the db should look go here
module.exports = ResponseSchema