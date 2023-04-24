import About from '../models/About.js';
import Joi from 'joi';
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

export const getAboutPage = async (req,res) => {
     const about = await About.find();
     res.render('about/addAbout',{
          title : 'Əlavə et',
          message : '',
          oldValues : '',
          messages: req.flash('success'),
          about
     });
};

export const aboutAdd = async (req, res) => {
     const aboutSchema = Joi.object({
       description: Joi.string().required().messages({
         'string.base': 'Açıqlama əlavə edilməlidir',
         'string.max': 'Açıqlama ən çox 200 simvoldan ibarət olmalıdır',
       }),
       location: Joi.string().required().messages({
         'string.base': 'Məkan əlavə edilməlidir',
         'string.empty': 'Məkan boş olmamalıdır',
       }),
       phone: Joi.string()
          .pattern(/^\d{0,10}$/)
          .required()
          .messages({
           'string.pattern.base': 'Telefon nömrəsi 10 rəqəmli olmalıdır',
           'string.empty': 'Telefon nömrəsi boş ola bilməz',
           'any.required': 'Telefon nömrəsi tələb olunur',
         }),
       email: Joi.string().email().required().messages({
         'string.email': 'Elektron poçt ünvanı düzgün deyil',
         'string.empty': 'Elektron poçt ünvanı boş ola bilməz',
         'any.required': 'Elektron poçt ünvanı tələb olunur',
       }),
     });
   
     try {
         const validatedData = await aboutSchema.validateAsync({
         description: req.body.description,
         email: req.body.email,
         location: req.body.location,
         phone: req.body.phone,
       });
   
       let existingAbout = await About.findOne();
       if (existingAbout) {
         existingAbout.description = req.body.description;
         existingAbout.location = req.body.location;
         existingAbout.phone = req.body.phone;
         existingAbout.email = req.body.email;
         if (req.files && req.files.photo) {
           const photoUpload = await cloudinary.uploader.upload(req.files.photo.tempFilePath, {
             use_filename: true,
             folder: 'portfolio',
           });
           fs.unlinkSync(req.files.photo.tempFilePath);
           await cloudinary.uploader.destroy(existingAbout.image_id);
           existingAbout.photo = photoUpload.secure_url;
           existingAbout.image_id = photoUpload.public_id;
          }
          await existingAbout.save();
       } else {
         const photoUpload = await cloudinary.uploader.upload(req.files.photo.tempFilePath, {
           use_filename: true,
           folder: 'portfolio',
         });
         fs.unlinkSync(req.files.photo.tempFilePath);
         await About.create({
           ...req.body,
           photo: photoUpload.secure_url,
           image_id : photoUpload.public_id
         });
       }
       req.flash('success', 'İşlem başarıyla tamamlandı!');
       res.redirect('/about/add');
     } catch (error) {
       res.render('about/addAbout', {
         message: 'Yanlış data, düzgün məlumat təqdim edin',
         error: error && error.details ? error.details.map((d) => d.message).join('<br>') : null,
         about: req.body,
         title: 'Əlavə et',
         oldValues: { ...req.body },
       });
       console.log(error);
     }
};