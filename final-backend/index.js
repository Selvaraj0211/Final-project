const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

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


app.get('/cartget', async (req, res) => {
  const username = req.params.user;

  try {
    const userCart = await CartData.findOne({ user });
    if (userCart) {
      res.json(userCart.cart);
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (err) {
    res.status(500).send("Error getting cart");
  }
});


app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
