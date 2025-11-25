import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ msg: "Email or Password is Wrong" })
        }

        const token = jwt.sign(
            { role: "admin", email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("adminToken", token);

        return res.status(200).json({ msg: "Login Success",token:token });
    } catch (error) {
        return res.json({ msg: error })
    }

}