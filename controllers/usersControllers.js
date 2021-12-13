const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require ('jsonwebtoken')

const usersControllers = {
  //q no haya usuarios repetidos-
  //seguridad de la contraseña
  //validacion de datos

  // obtenerUser: (req, res) => {
  //   User.findOne({ _id: req.params.id }).then((user) => res.json({user}));
  // },
  cargarUser: async (req, res) => {
          const { firstName, lastName, userMail, password, imagenUser, userCountry, google } =
            req.body;
          try {
            const userExiste = await User.findOne({ userMail });
            if (userExiste) {
              res.json({
                success: false,
                error: "User mail already exists.",
                response: null,
              });
            } else {
              const passwordHasheada = bcryptjs.hashSync(password, 10);
              const newUser = new User({
                firstName,
                lastName,
                userMail,
                password: passwordHasheada,
                imagenUser,
                userCountry,
                google
              });
              const token = jwt.sign({...newUser}, process.env.S_KEY)
              await newUser.save();
              res.json({ success: true, response: {token,newUser}, error: null });
            }
          } catch (error) {
            res.json({ success: false, response: null, error: error });
          }
  },

  obtenerUsers: (req, res) => {
        User.find().then((users) => res.json({ users }));
      },


      cargarSignIn: async (req, res) => {
        const { userMail, password, google} = req.body;
        try {
          console.log(req.body)
          const userExiste = await User.findOne({ userMail });
          if (userExiste.google && !google) throw new Error ("E-mail or password incorrect.")
         else if (!userExiste) {
            res.json({
              success: false,
              error: "E-mail or password incorrect.",
              response: null,
            });
          } else {
            const passwordMatch = bcryptjs.compareSync(
              password,
              userExiste.password
            );
            if (passwordMatch) {
              const token = jwt.sign({...userExiste}, process.env.S_KEY)
              // console.log(token)
              res.json({ success: true, response: {token, userExiste }, error: null });
            } else {
              res.json({ success: false, error: "E-mail or password incorrect." });
            }
          }
        } catch (error) {
          console.log(error)
          res.json({ success: false, response: null, error: error });
        }
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
