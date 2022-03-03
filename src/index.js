const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000
const db = require('./config/db')

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'publics')))

const { engine } = require('express-handlebars');
db.connect()
// Use Morgan
app.use(morgan('combined'))

// use handlebars

app.engine('hbs', engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})