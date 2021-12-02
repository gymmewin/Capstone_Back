const bcrypt = require('bcrypt')
const express = require('express')
const user = express.Router();
const postgres = require('../postgres.js');

//Read Route
user.get('/', (req,res) => {
   postgres.query('SELECT * FROM users ORDER BY users_id ASC;', (error, results) => {
      res.json(results.rows)
   });
});

//Sign Up Route
user.post('/signup', (req, res) => {
   const saltRounds = 10;
   // const salt = bycrpt.genSalt(saltRounds);
   // const bcryptPassword = bcrypt.hash(req.body.password, salt)
   bcrypt.genSalt(saltRounds, (error, salt) => {
      bcrypt.hash(req.body.password, salt, (error, hash) => {
         postgres.query(`INSERT INTO users (user_name, email, password) VALUES ('${req.body.user_name}', '${req.body.email}', '${hash}');`, (error, createdUser) => {
            if (error) {
               res.json('User Already Exist');
            } else {
               console.log('User Is Created');
               res.json(createdUser.rows)
            }
         })
      })
   })
})

//Login Route
user.put('/login', (req,res) => {
   postgres.query(`SELECT * FROM users WHERE email = '${req.body.email}';`, (error, foundUser) => {
      if(error){
         console.log('user not found');
         res.json('Sorry, but the Database ran into a problem. Please try again.')
      } else {
         if(!foundUser){
            res.json('This user was not found. Please try again.')
         } else if (foundUser) {
            bcrypt.compare(req.body.password, foundUser.rows[0].password, (error, matched) => {
               if (error) {
                  res.json('Password does not match. Please try again.')
               } else {
                  console.log(foundUser.rows[0].password);
                  res.json({user_name: foundUser.rows[0].user_name})
               }
            })
         } 
      }
   })
})

module.exports = user
