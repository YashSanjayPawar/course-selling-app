const {Router}=require('express');
const courseRouter=Router();

courseRouter.get('/preview', (req, res) => {
  res.json({
    message:"Preview all the courses"
  })
})
 courseRouter.post('/purchase', (req, res) => {
  res.json({
    message:"purchase a course"
  })
})

module.exports={
    courseRouter:courseRouter
}