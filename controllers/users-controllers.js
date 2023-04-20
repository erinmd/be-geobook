const userModel = require('../model/user.js')
const mongoose = require('mongoose')

exports.getUsers = async (req, res) => {
  try {
    const userData = await userModel.find()
    return res.status(200).send({ users: userData })
  } catch (error) {
    next(error)
  }
}

exports.getUser = async (req, res, next) => {
  try {
    const userData = await userModel
      .findOne({ firebase_id: req.params.id })
      .setOptions({ sanitizeFilter: true })
    if (!userData) {
      await Promise.reject({ status: 404, msg: 'User Not Found' })
    } else {
      return res.status(200).send({ user: userData })
    }
  } catch (error) {
    next(error)
  }
}

exports.postUser = async (req, res, next) => {
  const auth = req.currentUser
  if (auth) {
    try {
      const newUser = new userModel({
        username: req.body.username,
        firebase_id: req.body.firebase_id,
        name: req.body.name
      })
      const dataToSave = await newUser.save()
      return res.status(201).send({ user: dataToSave })
    } catch (error) {
      next(error)
    }
  } else {
    return res.status(403).send({ msg: 'Not authorized' })
  }
}

exports.patchUser = async (req, res, next) => {
  try {
    const id = req.params.id
    const { claimed_book } = req.body
    const options = { safe: true, upsert: true, new: true }
    const result = await userModel.findOneAndUpdate(
      { firebase_id: req.params.id },
      { $push: { claimed_books: claimed_book } },
      options
    )
    res.status(200).send({ user: result })
  } catch (error) {
    next(error)
  }
}
