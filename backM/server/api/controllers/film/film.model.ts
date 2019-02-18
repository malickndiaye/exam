'use strict';
import { Document, Schema, Model, model} from "mongoose";
import { FilmService } from "./film.service";

const FilmSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  annee: {
    type: Date,
    required: true
  }, 
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  prix: {
    type: String,
    required: false
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
  },
  deletefilm(id) {
    this.api.deletefilm(id) 
},
});

/**
 *  hooks methods
 */
FilmSchema.pre('save', function(next) {
  //todo
  //this.updated = Date.now();
  //this.update({'updated':Date.now()});
  next();
});

export default model('Etudiant', FilmSchema);
