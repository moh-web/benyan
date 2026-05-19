const mongoose = require("mongoose");
const bctrypt = require("bcrypt");
const { required, types } = require("joi");
const adminSchema = new mongoose.Schema({
username:{
    type: string,
    required: [true, "Username is required"]

},
email:{
    type: string,
    required: [true, "email is required"]

},
password:{
    type: string,
    required: [true, "password is required"],
    minlength: 6,

},
}, {timestamps: true});
adminSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
        this.password = await bctrypt.hash(this.password, 10);


})
adminSchema.method.comparePassword = async function (matchedPassword) {
    await bctrypt.compare(matchedPassword, this.password);
    
};
const Admin = mongoose.model(Admin, adminSchema);
module.exports=Admin;