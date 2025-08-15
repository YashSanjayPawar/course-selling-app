const {Router}=require('express');
const userRouter=Router();

userRouter.post('/signin', (req, res) => {
  res.json({
    message:"singin success"
  })
})

userRouter.post('/signup', (req, res) => {
  res.json({
    message:"singin success"
  })
})

 userRouter.get('/purchase', (req, res) => {
  res.json({
    message:"course purchased are here to see"
  })
})


module.exports={
    userRouter :userRouter
}