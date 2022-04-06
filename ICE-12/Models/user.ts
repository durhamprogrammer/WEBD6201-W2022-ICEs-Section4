import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    DisplayName: String,
    Username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema);
export default Model;