const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String },
  surname: { type: String },
  father: { type: String },
  position: { type: String },
  mailing: { type: Number },
  pnone: { type: Number },
  title: { type: String },
  type: { type: String },
  copies: { type: Number },
  numberOfPages: { type: Number },
  addInformation: { type: String },
  // reviews: { data: Buffer, contentType: String },
  // extractAC: { data: Buffer, contentType: String },
  // manuscript: { data: Buffer, contentType: String },
});

module.exports = model("Order", schema);
