const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./UserModel');
const ProductModel = require('./ProductModel');
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/myapp', console.log("Connected to database;"));

app.get('/data', async (req, res) => {
    try {
        const Products = await ProductModel.find();
        res.json(Products);
    } catch (err) {
        res.status(404).send(err);
    }
});

app.get('/data/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findOne({ id: id });
        if (product) {
            res.status(200).json(product);
        }

        else {
            res.status(404).json({ message: "Get Out of this unrestricted area!" })
        }
    }

    catch (err) {
        console.log(err);
    }
})

app.post('/login', (req, res) => {
    const { name, email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                    res.write(`Welcome Back ${name}`)
                } else {
                    res.json("The password is incorrect")
                }
            }
            else {
                res.json("No record existed")
            }
        })
})

app.post('/sign-in', async (req, res) => {
    const { email } = req.body;
    try {
        const emailExists = await UserModel.findOne({ email });
        if (emailExists) {
            res.status(404);
            res.json('true');
        }

        else {
            res.status(200)
            res.json("false")
            UserModel.create(req.body)
                .then(users => req.json(users))
                .catch(err => res.json(err))
        }
    }

    catch (err) {
        res.writeHead("Email is registered")
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server running at port 3000...')
})