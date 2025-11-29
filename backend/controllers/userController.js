import jwt from 'jsonwebtoken'
import Product from '../models/Product.js'

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

export const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !price || !image) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newProduct = await Product.create({
      name,
      price,
      image,
    });

    return res.status(200).json({
      success: true,
      msg: "Product added successfully",
      product: newProduct,
    });

  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const fetchProduct = async (req,res) => {
       const product = await Product.find()
       return res.json({product:product})
}