import express from 'express';
import userRoute from './routes/userRoute.ts';
import cors from 'cors';

// Important : CORS
// Si ton frontend React tourne sur un autre port (ex: http://localhost:3000), ton backend doit accepter les requêtes CORS.
// import productRoutes from './routes/productRoutes' (si besoin)

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use('/users', userRoute);
// app.use('/products', productRoutes); // Exemple

export default app;
