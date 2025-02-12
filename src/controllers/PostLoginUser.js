import { apiLogInUser } from "../api/UserApiQues";
import { GetToken } from "../handleCommon/GetToken";
const bcrypt = require('bcryptjs');

const PostLoginUser = async (req, res) => {
    let data = req.body;
    if (!data || !data.email || !data.password) {
        return res.status(200).json({
            EC: 1,
            EM: "NOT ENOUGH DATA"
        })
    } else {
        const api = await apiLogInUser(data.email);
        if (api) {
            if (bcrypt.compareSync(data.password, api.password)) {
                let header = {
                    "alg": "HS246",
                    "typ": "JWT"
                };
                let payload = {
                    id: api.id,
                    exp: Date.now() + 3600000000
                };
                let signature = api.signature;
                let token = GetToken(header, payload, signature);
                return res.status(200).json({
                    EC: 0,
                    EM: "Login Success",
                    token: token

                })
            } else {
                return res.status(200).json({
                    EC: 3,
                    EM: "Your PassWord Is Not Correct"
                })
            }
        } else {
            return res.status(200).json({
                EC: 2,
                EM: "Email not exist"
            })
        }
    }

}

export default PostLoginUser;


