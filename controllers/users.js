const users = require('../data/index')

const listUsers = (req, res) => {
  res.json(users)
}
const getOne = async (req, res) => {
  try {
    const find = await users.find(u => u.id == req.params.id)
    if(!find) return res.stauts(404).json({msg:`User not found`})

    res.json(find)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg:`SERVER ERROR`})
  }
}
 const createOne = async (req, res) => {
  try {
    let newUser = {
      id: users.length+1,
      body: req.body
    }
    if(!req.body) return res.status(400).json({msg: `Please include updated information`})
   
    users.push(newUser)
    res.json(newUser)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
 }

 const updateUser = async (req, res) => {
  try {
    const find = await users.find(u => u.id == req.params.id)
    if(!find) return res.status(404).json({msg: `User not found`})

    Object.assign(find, req.body, {id: find.id})
    res.json(find)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg:`SERVER ERROR`})
  }
 }

 const deleteUser = async (req, res) => {
   try {
  
     const find = await users.findIndex(u => u.id == req.params.id)
     if(!find) return res.status(404).json({msg: `User not found`})

     users.splice(find, 1)
     res.json({msg: `User Deleted`})
   } catch (error) {
     console.error(error.message)
     res.status(500).json({msg: `SERVER ERROR`})
   }
 }

module.exports = {
  listUsers,
  getOne,
  createOne,
  updateUser,
  deleteUser
}