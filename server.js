import roll from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));
const port = args.port|| 5000;

app.get('/app/', (req, res) => {
    // app endpoint
    res.send('200 OK');
});

app.get('/app/roll/', (req, res) => {
    // roll endpoint
    var output = roll(6, 2, 1);
    res.send(output);
});

app.post('/app/roll/', (req, res) => {
    // second roll endpoint
    let sides = parseInt(req.body.sides);
    let dice = parseInt(req.body.dice);
    let rolls = parseInt(req.body.rolls);
    var output = roll(sides, dice, rolls)
    res.send(output);
});

app.get('/app/roll/:sides/', (req, res) => {
    // sides endpoint
    let sides = parseInt(req.params.sides);
    var output = roll(sides,2,1)
    res.send(output);
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    // dice endpoint
	var sides = parseInt(req.params.sides, 10);
	var dice = parseInt(req.params.dice, 10);
    var output = roll(sides, dice, 1);
	res.send(output);
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    // third rolls endpoint
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    var output = roll(sides, dice, rolls);
    res.send(output);
})

app.use(function(req, res) {
	res.send("404 NOT FOUND");
});

app.listen(port);