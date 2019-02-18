'use strict';
import { Document, Schema, Model, model} from "mongoose";

const InscriptionSchema = new Schema({
  film: {
    type: Schema.Types.ObjectId,
    ref: 'film',
    select: true
  },
  
  created: {
    type: Date,
    default: Date.now(),
    required: true,
    select: false
  },
  update:{
      type: Date,
      select: false
  }
  
 
 
});

/**
 *  hooks methods
 */
InscriptionSchema.pre('save', function(next) {
  //todo
  //this.updated = Date.now();
  next();
});

export default model('Inscription', InscriptionSchema);
