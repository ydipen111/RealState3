import { lowerCase } from "lodash";
import { model, schema, objectID } from "mongoose";

const schema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowerCase: true,
  },
  name: {
    type: String,
    trim: true,
    default: "",
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 256,
  },

  address: { type: String, default: "" },
  company: { type: String, default: "" },
  phone: { type: String, default: "" },
  photo: {},
  role: {
    type: [string],
    default: ["Buyer"],
    enum: ["Buyer", "Seller", "Admin"],
  },

  enquiredProperties: [{
    type: objectID, ref: "ad",
    wishList: [{ type: ObjectId, ref: "AD" }],
    resetCode: "",
  }]

}, { timestamps: true });


export default model("user", schema);