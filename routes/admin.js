const { Router }=require('express');
const adminRouter=Router();

// admin login, admin signup, create a course, delete a course, add course content.


adminRouter.post('/signin', (req, res) => {
  res.json({
    message:"singin login admin success"
  })
})

adminRouter.post('/signup', (req, res) => {
  res.json({
    message:"singup admin success"
  })
})
//here study middleware so that if user==admin login u can access all the routes
adminRouter.post('/course', (req, res) => {
  res.json({
    message:"singup admin success"
  })
})

adminRouter.post('/course/bulk', (req, res) => {
  res.json({
    message:"singup admin success"
  })
})



module.exports={
    adminRouter : adminRouter
}