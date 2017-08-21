var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone ={
    title: 'Article one|Suhit raja',
    heading: 'Article one',
    date: 'Aug 20',
    contnt: `
              <p>
        This is my first article
        </p>
        <p>
        this is a new paragraph
        </p> `
};
function createTemplate (data) {
   var title=data.title;    
   var heading=data.heading;
   var date=data.Date;
   var content=data.content;
   
var htmlTemplate =`
           <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container"></div>
            
        
        <div>
            
            <a href="/">Home</a>
        </div>  
    <hr/>
    <div>
        <h3>
            ${heading}
        </h3>
    </div>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
    
     </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
     res.send(createTempate(articleone));
   
});
app.get('/article-two', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   
});
app.get('/article-three', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
