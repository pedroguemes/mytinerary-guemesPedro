const User = require("../models/User");

const usersControllers = {
  obtenerUsers: (req, res) => {
    User.find().then((users) => res.json({ users }));
  },
  obtenerUser: (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => res.json({user}));
  },
  cargarUser: (req, res) => {
    const {firstName, lastName, userMail, password, imagenUser,userCountry} = req.body;
    new User({firstName, lastName, userMail, password, imagenUser,userCountry})
      .save()
      .then((resp) => res.json({ resp }));
  },
};
module.exports = usersControllers;


////////////////////////////////////////////////////////
// modifyUser: async (req, res) => {
//   const userPropierties = req.body;
//   let modifyUser;
//   try {
//     modifyUser = await User.findOneAndUpdate(
//       {_id:req.params.id},
//       userProperties,
//       {new:true}
//     );
//   }catch(error){}
//   res.json({success:modifyUser?true:false});
// },
////////////////////////////////////////////////////////

// borrarUser: async (req, res) => {
//   let user;
//   const id = req.params.id;
//   try {
//     user = await User.findOneAndDelete({
//       _id: id,
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   res.json({response:user,success:true});
// },
