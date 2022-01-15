import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name'],
      trim: true,
      maxlength: [20, 'Your name is up to 20 character'],
    },
    account: {
      type: String,
      required: [true, 'Please add your email or phone'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add your password'],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        'https://res-console.cloudinary.com/nam-instagram/thumbnails/v1/image/upload/v1621172995/bmFtLWluc3RhZ3JhbS9rOGl6aG5odmFneHdmMHhvbnU0Yw==/folder_thumbnail/d184OCxoXzg4LGNfdGh1bWI=',
    },
    role: {
      type: String,
      default: 'user',
    },
    type: {
      type: String,
      default: 'normal',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', userSchema)
