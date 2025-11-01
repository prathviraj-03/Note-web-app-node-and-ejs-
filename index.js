const express  = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// ensure files directory exists
const filesDir = path.join(__dirname, 'files');
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir, { recursive: true });
}

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    fs.readdir(filesDir, function(err, files){
        if (err) return res.status(500).send('Unable to read files');
        res.render("index", {files: files});
    })
    
})

app.post('/create', function(req,res){
    const rawTitle = req.body.title || 'untitled';
    // remove spaces and basic sanitization
    const sanitized = rawTitle.split(' ').join('') || 'untitled';
    const filename = sanitized + '.txt';
    const fullPath = path.join(filesDir, filename);
    fs.writeFile(fullPath, req.body.details || '', function(err){
        if (err) {
            console.error('Error writing file', err);
            return res.status(500).send('Could not save file');
        }
        res.redirect('/')
    });
})

// read file route
app.get('/read/:name', function(req, res) {
    const name = req.params.name;
    // basic traversal protection
    if (name.includes('..') || path.isAbsolute(name)) return res.status(400).send('Invalid file name');
    const fullPath = path.join(filesDir, name);
    fs.readFile(fullPath, 'utf8', function(err, data){
        if (err) return res.status(404).send('File not found');
        res.render('read', { filename: name, content: data });
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));