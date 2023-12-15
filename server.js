const express = require("express")
const app = express()
const { addUser, deleteUser, findUser } = require("./controllers/user")
app.use(express.json());
app.get('/', (req, res) => {
  return res.send("working")
})

app.post('/user', addUser);

app.get('/finduser/:name', findUser);

app.delete('/user/:name', deleteUser);



const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {
  console.log("Server listening on PORT::"+PORT)
})