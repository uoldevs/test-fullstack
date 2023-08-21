import 'reflect-metadata';
import app from './app';
const PORT = process.env.PORT || 3005;

const server = app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});

export default server;