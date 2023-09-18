const { v4: uuidv4 } = require('uuid');
const User = require("../models/users.model")


const getAlluser =  async(req, res) => {
    try {
        const users = await User.find()
    res.status(200).json({
        message: 'All users',
        users
    })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneuser =  async(req, res) => {
    try {
        const user = await User.findOne({id: req.params.id})
    res.status(200).json({
        message: 'Get One User',
        user
    })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser =  async(req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(201).json({
            message: 'user is created'
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateUser =  async(req, res) => {
    try {
       const user = await User.findOne({id: req.params.id})
       user.name = req.body.name;
       user.age = Number(req.body.age)
        
        await user.save()
        res.status(201).json({
            message: 'user updated successfully',
            user
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteUser =  async(req, res) => {
    try {
        await User.deleteOne({id: req.params.id})
        res.status(200).json({
            message: "user is Deleted"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

module.exports = {getAlluser, getOneuser, createUser, updateUser, deleteUser}