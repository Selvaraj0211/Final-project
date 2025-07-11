const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://Selvaa:ss1234567@cluster0.sksxgv5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("DB Connection Failed:"));


const cartSchema = new mongoose.Schema({
  user: String,
  pass: String,
  cart: Array
});

const CartData = mongoose.model("CartData", cartSchema, "usercart");


app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  console.log('Received login:', user, pass);
  res.send("Login received");
});

// save cart to db
app.post('/cartsave', async (req, res) => {
  const { user, cart } = req.body;

  try {
    const newCart = new CartData({ user, cart });
    await newCart.save();
    res.status(201).send("Cart saved to DB");
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).send("Failed to save cart");
  }
});

// get cart from db

app.post('/cartremove', async (req, res) => {
  const { user, cart } = req.body;

  try {
    const existing = await CartData.findOne({ user });
    if (existing) { 
      existing.cart = cart;
      await existing.save();
      res.send("Item removed from cart");
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).send("Server error");
  }
});


// contact email send 
app.post("/sendmail", (req, res) => {
  const { name, cus, msg } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "selvarannav6231@gmail.com",
      pass: "avlz dzcz hfmf oekv",
    },
  });

  (async () => {
    try {
      const info = await transporter.sendMail({
        from: cus,
        to: "selvarannav6231@gmail.com",
        subject: "customer"+ name,
        text: msg
      });

      console.log("Message sent:");
      res.send("Email sent successfully");
    } catch (err) {
      console.error("Mail error:");
      res.status(500).send("Failed to send email");
    }
  })();
});




app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
