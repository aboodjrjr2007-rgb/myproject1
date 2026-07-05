import dotenv from "dotenv"

import express from "express";

import mongoose from "mongoose";
import Product from "./models/product.js";

dotenv.config()
const app = express();

app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error(err);
  });


app.post("/addProducts", async (req, res) => {
  const newProduct = await Product.create(req.body);
  try{
if(newProduct.req.body.messages>10 ||newProduct.req.body.messages<0 ){
  console.log("u put a wrong number")
}
else {
  console.log("weeeeee")
}
  }catch(error){
    console.error(error)
  }

  res.status(201).send(newProduct);
});


app.get("/GetSpeceifcProducts/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
});



app.get("/allProducts", async (req, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
});



app.patch("/updateProducts/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.status(200).send("Updated Successfully!")
  } catch (error) {
    console.log(error);
  }
});



app.delete("/deleteSpecificProduct/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.json(product);
});




app.delete("/deleteAllProduct", async (req, res) => {
  const deleteAllProducts = await Product.deleteMany();
  res.json(deleteAllProducts);
});



app.get("/getAllAvilableProducts", async(req,res) => {
  const product = await Product.find({available : true});

  res.send(product)
})



app.get("/getNotAllAvilableProducts", async(req,res) => {
  
  const product = await Product.find({available : false});

  res.send(product)
})



app.get("/getProductByName/:name", async(req,res) => {
  
const product = await Product.find({name : req.params.name});

  res.json(product)
});



app.get("/getProductByCatagory/:catagory", async(req,res) => {
  
  const product = await Product.find({catagory : req.params.catagory});

  res.json(product)
})

app.get("/",(req,res) => {
  res.render("home")
})

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
