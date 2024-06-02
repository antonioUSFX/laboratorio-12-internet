import express from 'express';
import morgan from 'morgan';
import { sequelize } from './database/database.js';
import medicRoutes from './routes/medic.routes.js';
import officeRoutes from './routes/office.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/medics', medicRoutes);
app.use('/offices', officeRoutes);

// Iniciar la conexión a la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  console.log('Base de datos conectada y sincronizada.');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(err => console.error('Error al conectar y sincronizar la base de datos:', err));

app.get("/", (req, res) => {
    res.send("¡Hola! Esta es la ruta de inicio de tu aplicación.");
  });