const users = require('../data/index')

const listUsers = (req, res) => {
  res.json(users)
}
const getOne = (req, res) => {
  const find = users.find(u => u.id == req.params.id)
  res.json(find)
}
 const createOne = (req, res) => {
   let newUser = {
     id: users.length+1,
     body: req.body
   }
   users.push(newUser)
   res.json(newUser)
 }

 const updateUser = (req, res) => {
   const find = users.find(u => u.id == req.params.id)
   Object.assign(find, req.body, {id: find.id})
   res.json(find)
 }

 const deleteUser = (req, res) => {
   const find = users.findIndex(u => u.id == req.params.id)
   users.splice(find, 1)
   res.json({msg: `User Deleted`})
 }

module.exports = {
  listUsers,
  getOne,
  createOne,
  updateUser,
  deleteUser
}