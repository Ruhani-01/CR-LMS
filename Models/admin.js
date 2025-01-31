const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
      default: [], // Set default value to an empty array
    },
  ],
  coupons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
      default: [], // Set default value to an empty array
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
      default: [], // Set default value to an empty array
    },
  ],
  earnings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
