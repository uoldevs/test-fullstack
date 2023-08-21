require('dotenv').config();

const fastify = require('fastify')({ logger: true });

async function build () {
	const customerRoutes = require('./routes/customerRoutes');
  
	const sequelize = require('./database');
  
	sequelize.sync({ force: false })
		.then(() => {
			console.log('Banco de dados sincronizado');
		})
		.catch((error) => {
			console.error('Erro ao sincronizar o banco de dados:', error);
		});
  
	fastify.register(customerRoutes);
  
	await fastify.register(require('@fastify/express'));
	fastify.use(require('cors')({
		origin: '*',
		methods: 'GET,POST,PUT,DELETE',
		allowedHeaders: 'Content-Type,Authorization',
	}));
}

const { ADDRESS = 'localhost', PORT = '3001' } = process.env;

build()
	.then(fastify.listen({ port: PORT, host: ADDRESS }, (err) => {
		if (err) {
			console.error('Erro ao iniciar o servidor:', err);
			process.exit(1);
		}
		console.log('Servidor iniciado em http://localhost:' + PORT);
	}))
	.catch(console.log);

