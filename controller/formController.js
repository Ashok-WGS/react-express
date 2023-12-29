const express = require("express")
const bcrypt = require('bcrypt');


const firstGetRequest = (req, res) => {
    res.status(200).json({ error: false, message: "My first Get request" })
}

const firstPostRequest = async (req, res) => {
    const pass = req.body.password;
    console.log(pass);
    const hashedPassword = await bcrypt.hash(pass, 1);
    console.log(hashedPassword);
    if (pass) {
        //console.log(req.body);
        res.status(200).json({ error: false, message: "data inserted" })
    } else {
        res.status(400).json({ error: true, message: "error" })
    }

}

module.exports = {
    firstGetRequest,
    firstPostRequest
}