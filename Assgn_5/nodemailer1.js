const nodemailer = require("nodemailer");
let transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:"sumitmern123@gmail.com",
        pass:"tzoywihimtovlkda"
    }
});
let mailOptions={
    from:'sumitmern123@gmail.com',
    to:['joshisummi@gmail.com','sumit.ducat@gmail.com'],
    subject:"Testing Mail",
    text:"Hello test mail",
    html:''
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){ console.log(err)}
    else{
         console.log("Mail send : "+info)
    }
})

