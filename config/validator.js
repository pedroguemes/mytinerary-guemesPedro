// const joi = require('joi')


// const validator = (req,res,next) => {
    
//     const schema = joi.object({
//         firstName: joi.string().max(10).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
//             "string.min":"Your name must have at least 2 characters."
//         }),
//         lastName:joi.string().max(10).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
//             "string.min":"Your name must have at least 2 characters."
//         }),
//         userMail: joi.string().email({tlds:{allow:false}}).required().messages({
//             "any.requires":"enter mail"
//         }),
//         password:joi.string().max(13).min(7).trim().required().messages({
//             "string.min":"Your name must have at least 2 characters."
//         })
//     })
//         const validation = schema.validate(req.body,{abortEarly:false})


//         if (validation.error) {
//             console.log(validation.error)
//             return res.json({success: false, response:validation.error.details})
//         }
        
//         next()        
// }

// module.export = validator

const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twenty letters'
        }),
       lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The last name must have more than three letters',
            'string.max': 'The last name must have less than twenty letters'
        }),
        password: joi.string().max(16).min(8).trim().required().messages({
            'string.min': 'The password must have more than three letters',
            'string.max': 'The password must have less than twenty letters'
        }),
        userMail: joi.required(),
        imagenUser: joi.required(),
       userCountry: joi.required()
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if(validate.error) {
        return res.json( { success: false, response: validate.error.details } )
    }

    next()
}

module.exports = validator 