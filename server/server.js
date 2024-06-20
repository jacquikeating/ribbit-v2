import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 8081;

function readFrogs() {
	const frogsFile = fs.readFileSync("./data/data.json");
	const frogsData = JSON.parse(frogsFile);
	return frogsData;
}

console.log(readFrogs())

// app.get('/healthcheck', (_req, res) => {
// 	res.send("If you're reading this, the server is running!");
// });

app.use(cors())
app.use(express.static("static/audio")); 
app.use(express.json());


app.get('/frogs', (req, res) => {
	res.json(readFrogs());
})

app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});




