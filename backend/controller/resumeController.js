import Resume from "../models/Resume.js";

export const getResume = async (req, res) => {
     res.render('resume/addResume', {
          title: 'Resume',
     });
};

export const addResume = async (req, res) => {
     try {
          const {
               educated,
               experience,
               awards,
               skills,
               knowledges
             } = req.body;
     } catch (error) {
          
     }
};