const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            trim: true
        },
        tokens:[
            {
                token:{
                    type: String,
                    required: true
                }   
            }
        ]
    },
    {
        timestamps : true,
    }
);


userSchema.pre('save',async function(next){
    if(this.isModified('password')) {
        this.password = bcrypt.hash(this.password,12);
    }
    next();
})

// userSchema.methods.hashit = async function () {
//     try{
//         let hashedpass = this
//         if(this.isModified('password')){
//             this.password = bcrypt.hash(this.password,12);
//             await this.save();
//             return this.password;
//         }
//     }catch(err) {
//         console.log(err);
//     }
// }



userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err)
    {
        console.log(err);
    }
}


const users = mongoose.model('users',userSchema);

module.exports = users;