const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());
app.use(bodyParser.json());

// Inicializar o Firebase Admin
const serviceAccount = require('./caminho/para/seu/arquivo.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Rota de Cadastro
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    admin.auth().createUser({ email, password })
        .then(userRecord => {
            res.status(201).send({ uid: userRecord.uid });
        })
        .catch(error => {
            res.status(400).send(error.message);
        });
});

// Rota de Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    admin.auth().getUserByEmail(email)
        .then(userRecord => {
            // A autenticação real deve ser feita no frontend
            res.status(200).send(userRecord);
        })
        .catch(error => {
            res.status(400).send(error.message);
        });
});

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});