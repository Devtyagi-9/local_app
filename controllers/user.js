
const fs = require("fs"); 

exports.addUser = (req, res, next) => {
  console.log(req.body)
  var data = fs.readFileSync("user.json");
  var myObject= JSON.parse(data);
  console.log(myObject)
  myObject.push(req.body);
  var newData = JSON.stringify(myObject);
  fs.writeFile("user.json", newData, err => {
    if(err) throw err;
    
    console.log("New data added");
  });   

  return res.send("POST User Added")

}


exports.findUser = (req, res, next) => {
  console.log(req.body)
  var data = fs.readFileSync("user.json");
  var myObject= JSON.parse(data);
  var userName = req.params.name;

  const devObject = myObject.find(item => item.name === userName);

  return res.send(devObject)

}


// exports.updateUser = (req, res, next) => {
//   console.log(req.body)
//   var data = fs.readFileSync("user.json");
//   var myObject= JSON.parse(data);
//   var userName = req.params.name;
//   var newUserName = 
  
//   const devObjectIndex = array.findIndex(item => item.name === userName);

// if (devObjectIndex !== -1) {
//   array[devObjectIndex].name = newUserName;
// }

//   var newData = JSON.stringify(myObject);
//   fs.writeFile("user.json", newData, err => {
//     if(err) throw err;
    
//     console.log("New data added");
//   });   

//   return res.send("POST User Updated")
// }


exports.deleteUser = (req, res, next) => {
  console.log(req.body)
  var data = fs.readFileSync("user.json");
  var myObject= JSON.parse(data);
  var deleteUserName = req.params.name;
  console.log("deleteUserName",deleteUserName)
  myObject = myObject.filter(item => item.name !== deleteUserName);

  fs.writeFile("user.json", JSON.stringify(myObject), err => {
    if(err) throw err;
    
    console.log("New data added");
  });   

  return res.send("User Deleted Successfully")

}
