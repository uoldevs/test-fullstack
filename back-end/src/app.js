const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ClientController = require('./controllers/clientController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const clientController = new ClientController();

app.get('/clients', clientController.getAllClients.bind(clientController));
app.get('/clients/:id', clientController.getById.bind(clientController));
app.post('/clients', clientController.createClient.bind(clientController));
app.put('/clients/:id', clientController.updateClient.bind(clientController));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

