import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  province: {
    type: Number
  },
  city: {
    type: Number
  },
  district: {
    type: Number
  },
  postalCode: {
    type: Number
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  role: {
    type: String,
    default: 'jobseeker'
  }
}, {
  timestamps: true
})

export default mongoose.model('user', userSchema)