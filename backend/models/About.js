import mongoose from 'mongoose';

const Schema = mongoose.Schema;

Schema.Types.String.set('trim', true);

const aboutSchema = new Schema({   
     description : {
          type : String,
          required : true
     },
     phone : {
          type : String,
     },
     photo : {
          type : String
     },
     image_id : {
          type : String
     },
     location : {
          type : String
     },
     email : {
          type : String,
          required : true 
     }
});


const About = mongoose.model('About', aboutSchema);

export default About;