const controller = {};

let users = [
  {
    id: 1,
    user: "eggarca",
    pass: "0990",
    firstName: "Erick",
    lastName: "Garcia",
    email: "eggarcia9814@gmail.com",
  },
];

let entrys = [
    {
      idEntry: 1,
      user: "eggarca",
      description: "Entrada 1",
      date: "1998-05-27",      
    },
  ];

//Render de Interfaces de cada ruta

controller.redirectSignup = (req, res) => {
  res.redirect("/signup");
};

controller.formSignup = (req, res) => {
  res.render("signUp");
};

controller.formLogin = (req, res) => {
  res.render("login");
};

controller.userEntry = (req, res) => {
    const username = String(req.params.id);
    const userLog = users.filter(userLog => userLog.user === username)[0];
    const name = userLog.firstName + " " + userLog.lastName;
    res.render('userEntry', {
        userActive: name,
        user: userLog.user,
      })
};

///Registro y autenticacion de usuarios

controller.userReg = (req, res) => {

  const ids = entrys.map((user) => user.id);
  const idMax = Math.max(...ids);
  const newEntry = {
    id: idMax + 1,
    user: req.body.username,
    pass: req.body.password,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    correo: req.body.emaentrys};
  users = [...users, newEntry]; //o notes.concat(newNote)
  res.status(201).redirect("/login"); //create status
  //console.log(user)
};

controller.authLogin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const userLog = users.filter(userLog => userLog.user === username);
  if (userLog.length !== 0) {
    if(userLog[0].pass === password){
        res.status(201).redirect("/userEntry/"+userLog[0].user); //create status
    }
  } else {
    
  }
};

//registro de entrada
controller.regEntry = (req, res) => {
    console.log(req.params.id)
    const ids = entrys.map((entry) => entry.idEntry);
    const idMax = Math.max(...ids);
    const newEntry = {
        idEntry: idMax + 1,
      user: String(req.params.id),
      description: req.body.description,
      date: req.body.date,
      };
    entrys = [...entrys, newEntry]; //o notes.concat(newNote)
    res.status(201).json(entrys); //create status
}

module.exports = controller;
