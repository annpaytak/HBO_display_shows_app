const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email })

  if(candidate){
    //check password, user exists
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if(passwordResult){
      //generate token, passwords match for user to send requests later
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})//secret key gen token and in hour save
      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else{
      //passwords do not match
      res.status(401).json({
        message: 'Passwords do not match'
      })
    }
  } else{
    //
    res.status(404).json({
      message: 'User not found'
    })
  }
}

module.exports.register = async function (req, res) {

  const candidate = await User.findOne({email: req.body.email})

  if(candidate){
    // if email exists, throw error
    res.status(409).json({
      message: 'This email is currently used.'
    })
  } else{
    // if email doesnt exist, create coded password and acc

    //salt - unique hash for encode password
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password

    const user = new User({ //created localy
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })

    
    try{ //save in db

      await user.save()
      res.status(201).json(user)
      

    } catch(e){
      //work error

    }
    


  }
}