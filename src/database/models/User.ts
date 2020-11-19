import mongoose from 'mongoose'

interface IUserModel extends mongoose.Document {
    email: string
}

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    }
})

export default mongoose.model<IUserModel>('User', Schema)