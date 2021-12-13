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
        password: !req.body.google ? joi.string().max(16).min(8).trim().required().messages({
            'string.empty':'All fields must be completed',
            'string.min': 'The password must have eight letters at least ',
            'string.max': 'The password must have less than twenty letters'
        }) : joi.string().required(),
        userMail: joi.required().mail(),
        imagenUser: joi.string().required(),
       userCountry: joi.required(),
       google: joi.boolean()
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if(validate.error) {
        return res.json( { success: false, response: validate.error.details } )
    }

    next()
}

module.exports = validator 




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