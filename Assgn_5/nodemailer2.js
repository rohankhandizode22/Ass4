const nodemailer = require("nodemailer");
var hbs = require('nodemailer-express-handlebars');
//attach the plugin to the nodemailer transporter
let fname="Sumit";
let lname="Joshi"
let transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:"sumitmern123@gmail.com",
        pass:"tzoywihimtovlkda"
    }
});
transporter.use('compile', hbs(
    {
        viewEngine:"nodemailer-express-handlebars",
        viewPath:"views/emailTemplates/",
        
    }
));
let mailOptions={
    from:'sumitmern123@gmail.com',
    to:['joshisummi@gmail.com','sumit.ducat@gmail.com'],
    subject:"Testing Mail",
    template:'mail',
    context:{
    firstName:fname,
    lastName:lname
    }
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){ console.log(err)}
    else{
         console.log("Mail send : "+info)
    }
})

