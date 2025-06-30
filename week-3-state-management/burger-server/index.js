import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;
const stripe = Stripe(process.env.SECRET_KEY);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Burger Server!");
});

app.post("/checkout-session", async (req, res) => {

  const { burgers } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items:[
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Burger ",
            },
            unit_amount: req.body.amount,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    console.log("this is the session", session);
    res.json({ url: session.url });
  } catch (error) {
    console.error("error", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
