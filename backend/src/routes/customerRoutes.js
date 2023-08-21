const Customer = require('../models/Customer');

const opts = {
	schema: {
		body: {
			type: 'object',
			properties: {
				name: { type: 'string' },
				email: { type: 'string', format: 'email' },
				cpf: { type: 'string', pattern: '^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$' },
				telephone: { type: 'string', pattern: '^\\(\\d{2}\\) \\d{5}-\\d{4}$' },
				status: { type: 'string', enum: ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'] }
			},
			required: ['name', 'email', 'cpf', 'telephone', 'status']
		}
	}
};

module.exports = function (fastify, options, done) {
	fastify.post('/customers', opts, async (request, reply) => {
		try {
			const newCustomer = await Customer.create(request.body, { sequelize: options.sequelize });
			return newCustomer;
		} catch (error) {
			if (error.name === 'SequelizeUniqueConstraintError') {
				reply.code(400).send({ error: 'Dados já cadastrados.' });
			} else {
				reply.code(500).send({ error: 'Erro ao criar o cliente.' });
			}
		}
	});

	fastify.get('/customers', async (request, reply) => {
		try {
			const customers = await Customer.findAll({ sequelize: options.sequelize });
			return customers;
		} catch (error) {
			console.error('Erro ao procurar os cliente:', error);
			reply.code(500).send({ error: 'Erro ao obter os clientes.' });
		}
	});

	fastify.get('/customers/:id', async (request, reply) => {
		const { id } = request.params;
		try {
			const customer = await Customer.findByPk(id, { sequelize: options.sequelize });
			if (!customer) {
				return reply.code(404).send({ error: 'Cliente não encontrado.' });
			}
			return customer;
		}
		catch (error) {
			console.error('Erro ao atualizar os cliente:', error);
			reply.code(500).send({ error: 'Erro ao atualizar o cliente.' });
		}
	});

	fastify.put('/customers/:id', opts, async (request, reply) => {
		const { id } = request.params;
		try {
			const customer = await Customer.findByPk(id, { sequelize: options.sequelize });
			if (!customer) {
				return reply.code(404).send({ error: 'Cliente não encontrado.' });
			}
      
			await customer.update(request.body, { sequelize: options.sequelize });
			return customer;
		} catch (error) {
			console.error('Erro ao atualizar os cliente:', error);
			reply.code(500).send({ error: 'Erro ao atualizar o cliente.' });
		}
	});

	done();
};
