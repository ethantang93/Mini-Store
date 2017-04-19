var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
      },
    email: {
        type: String,
        unique: true,
        required: true
      },
    password: {
        type: String,
        required:true
      }
}, {timestamps: true});
// generate hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
// hash the password before saving the user object
UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('User',UserSchema);
