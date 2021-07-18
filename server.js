//Import modules
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
const notes = require('./db/db.json');

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
