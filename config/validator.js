const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.empty':'All fields must be completed',
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twenty letters'
        }),
       lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.empty':'All fields must be completed',
            'string.min': 'Last name must be longer',
            'string.max': 'Last name must have less letters (20 max)'
        }),
        password: !req.body.google ? joi.string().min(8).trim().required().messages({
            'string.empty':'All fields must be completed',
            'string.min': 'The password must have eight letters at least ',
        }) : joi.string().required(),
        userMail: joi.string().email().required().messages({
            'string.empty':'Email must be completed'
        }) ,
        imagenUser: joi.string().required().messages({
            'string.empty':'Please add a profile picture.'
        }) ,
       userCountry: joi.string().required(),
       google: joi.boolean()
    })

    const validation = schema.validate(req.body,{abortEarly:false})


            if (validation.error) {
                console.log(validation.error)
                return res.json({success: false, response:validation.error.details})
            }
            

    next()
}

module.exports = validator 


