// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use static files
app.use(express.static('public'));

// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Use ejs
app.set('view engine', 'ejs');

// Create comments array
const comments = [
  { name: 'Taro', content: 'Hello World!' },
  { name: 'Jiro', content: 'Hello Universe!' },
  { name: 'Saburo', content: 'Hello Space!' }
];

// Display comments
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});

// Add comments
app.post('/new', (req, res) => {
  const name = req.body.name;
  const content = req.body.content;
  comments.push({ name: name, content: content });
  res.redirect('/');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});