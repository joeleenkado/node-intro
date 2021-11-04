import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

const db = []
app.post('/todo', (req, res) => {
    // console.log('db:', db)
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }
    db.push(newTodo)

    res.json(newTodo)
})
app.get('/todo', (req, res) => {
    res.json(db)
})
app.get('/todo/:id', (req, res) => {
   const todo = db.find(t => {
       return t.id === +req.params.id
   })
    res.json({data: todo})
// console.log('hello')
})
app.listen(process.env.PORT, () => {
//   console.log('Server on http://localhost:8000')  
console.log('listinging on port:')
})