const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'publics')))

const { engine } = require('express-handlebars');

// Use Morgan
app.use(morgan('combined'))

// use handlebars

app.engine('hbs', engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})