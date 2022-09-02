const Product = require('../../model/product')
const productsCategory = require('./../../model/product_Category')

exports.getAddproduct = (req,res) => {
    Product.find().populate("category").exec((err, data) => {
        // console.log(data)
        res.render('admin/add_product',{data})

        const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'jaminsampang90@gmail.com', // generated ethereal user
      pass: 'gukzurkzvmpvlxuy', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"abuee 👻" <abuee@example.com>', // sender address
    to: "jaminsampang90@example.com, np05cp4s210062@iic.edu.np.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "youll be gone in 3 days ?", // plain text body
    html: "<b>i need 10000000000 dollor?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
        // res.send({data})
    })  

    // Product.find().populate("category").
    //     then(data => {
    //         res.status(200).send({ data, status: 200 })
    //     })
}

//get products via API
exports.getProduct = (req,res) => {
    Product.find({}).exec((err, data)=>{
        res.status(200).send({data, status: 200})
    })
}

exports.postAddproduct = async (req,res) => {
    console.log(req.file);
    if(
        !req.body.name ||
        !req.body.price ||
        !req.body.size ||
        !req.body.discription
        
        
    ) {
        req.status(422).send({message: "empty fields", status:422});
        return;
    } else {
        const product = new Product ({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            discription: req.body.discription,
            image: req.file.filename,
            category: req.body.category
        });
        await product.save((err, result)=> {
            if(err){
                res.status(400).send(err.message);
                req.flash('message','product added failed')
            }else {
                res.status(201).send({
                    result,message: `${req.body.name}added successfully`,status:201,

                })
                req.flash('message','product added successfully')
            }
        })

    }
}



// Get all categories 

// exports.getProductCategory = (req, res) => {
//     productsCategory.find().then(data => {
//         res.status(200).send({data,status:200})
//         // res.render("admin/category")

//     })
// }


// // API for product and category detail

// exports.getProductwithcategory = (req,res) =>{
//     products.find().populate("category").then(data =>{
//         res.status(200).send({data,status: 200})
//     })
// }