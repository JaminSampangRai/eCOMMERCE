const User = require("./model/user_Login")
const bcrypt = require('bcryptjs')

// module.exports = async (req , res, next) => {
//     let hashPassword = await bcrypt.hash("password", 10);
//     var user ={
//         name: "admin",
//         email: "admin@gmail.com",
//         password: hashPassword,
//         isRole: "admin",

//     };
//     User.findOne({
//         user: user.email
//     })
//     .then((result) => {
//         if(result) {
//             console.log("already seeded");
//             next()
//         } else {
//             User.create(user).then((newUser) => {
//                 console.log("succesfully added");
//                 next()
//             })
//             .catch((err) => {
//                 console.log(err);
                
//             });

            

        
//         }

//     })
//     .catch((err) =>{
//         console.log(err);

//     });
    
// }


module.exports = async (req, res, next) => {
    const hashPassword = await bcrypt.hash("password", 10)
    const user = {
        name: "admin",
        email: "admin@gmail.com",
        password: hashPassword,
        role: "0"
    }
    User.findOne({ email: user.email })
        .then(result => {
            if (!result) {
                User.create(
                    user
                ).then(newUser => {
                    console.log("Successfully seeded");
                    return next()
                })
                    .catch(err => {
                        console.log(err);
                        return
                    }
                    )
            }
            console.log("Already seeded");
            next()

        })
        .catch(err => {
            console.log(err);
        })
}
