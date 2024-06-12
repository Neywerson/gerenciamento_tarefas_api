require('dotenv')
	.config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
//const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes)
app.use('/api', userRoutes);
app.use('/api', taskRoutes);


//sequelize.sync()
//	.then(() => {
//	app.listen(PORT, () => {
//		console.log(`Servidor está rodando na porta: ${PORT}`);

app.listen(process.env.PORT, () => {
	console.log(`Servidor está rodando na porta: ${process.env.PORT}`);
	});
	
//})
//	.
//catch (err => console.log(err));





//       http://localhost:3000/