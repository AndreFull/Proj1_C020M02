const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database') 
const route = require('./src/routes/card.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());


connectToDatabase();


app.use('/cards', route);

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Servidor Rodando na porta http://localhost:${port}`);
});


