
//srver for MVC Tech Blog 

const path = require('path');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

