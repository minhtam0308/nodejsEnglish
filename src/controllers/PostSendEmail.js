
const nodemailer = require("nodemailer");
const { apiGetUserToVerify } = require("../api/apiUser");
require('dotenv').config();


const PostSendEmail = async (req, res) => {
    if (req.body?.email) {
        let api = await apiGetUserToVerify(req.body.email);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: `dthanhlong780@gmail.com`,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const htmlForm = `
    <div class="container" style="background-color: #f0f4f8;">
    <div class="header" style="background-color: #00bfff;text-align: center;padding: 20px;">
        LEARNING WEB
    </div>
    <div class="content" style="background-color: #ffffff;border: 1px solid #e0e0e0;border-radius: 8px;padding: 20px;
        max-width: 600px;margin: 20px auto;">
        <h2 style=" background-color: #000080;
                        color: #ffffff;
                        padding: 10px;
                        border-radius: 4px;">
            Xác thực địa chỉ email
        </h2>
        <p>
            Chào mừng Quý khách đến với
            <strong>
                Mochi Learninggg
            </strong>
            !
        </p>
        <p>
            Vui lòng nhấn vào nút dưới đây để xác thực địa chỉ email của Quý khách:
        </p>
        <a 
        href="${process.env.HOST_FRONTEND}/verify?token_verify=${api.token}&idtk=${api.id}" 
        class="btn btn-custom" style="  
        background-color: #00bfff;
        color: #000080;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: bold;">
            Xác thực email
        </a>
        <p>
            Email xác nhận này chỉ có hiệu lực trong
            <strong>
                48h
            </strong>
            . Nếu Quý khách không phải là người gửi yêu cầu xác thực, vui lòng bỏ qua email này.
        </p>
        <p>
            Trân trọng,
            <br />
            <strong>
                tam
            </strong>
            Team
        </p>
    </div>
</div>`

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"thanh long" <dthanhlong780@gmail.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: htmlForm, // html body
        });

        // console.log("Message sent: %s", info);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

        if (info) {
            return res.status(200).json({
                EC: 0,
                EM: "Check your email"
            })
        } else {
            return res.status(200).json({
                EC: 1,
                EM: "ERROR FROM BACKEND"
            })
        }
    }

}
module.exports = {
    PostSendEmail
}