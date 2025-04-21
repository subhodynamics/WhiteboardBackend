const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const canvasSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    name: {
      type: String,
      required: true
    }
  },
  shared_with: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Assuming 'User' is the name of your User model
  }],
  elements: [{ type : mongoose.Schema.Types.Mixed }],
  
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update the updated_at field before saving
canvasSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const Canvas = mongoose.model('Canvas', canvasSchema);

module.exports = Canvas;
