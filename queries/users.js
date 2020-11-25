const db = require('../db');
const Joi = require('joi');

const schema = Joi.object({

    username: Joi.string().required(),
    phone: Joi.number().integer(),
    google_id: Joi.string(),
    banned: Joi.boolean().required(),
    email: Joi.string().email(),
    img_url: Joi.string().uri({
        scheme: [
            /https/
        ]
}),
    role_id: Joi.number().integer()

})
module.exports

findByEmail(email){
    return db('usr').where('email',email).first();

},
insert(user){
    return db('usr').insert(user);
    const result = schema.validate(user, schema);
    if(result.error ===null){
        return db('usr').insert(user);
    }else{ return Promise.reject(result.error)}
}    
