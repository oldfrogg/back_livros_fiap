import "dotenv/config"
import express from "express"
import sequelize from "./config/db.js";
import LivroRouter from "./routes/livroRouter.js"
import cors from "cors";


const app = express();
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json()); // executará express.json() em todas as reqs manejadas pelo express
app.use(LivroRouter);

const PORT = 3000;

sequelize.sync()
    .then(() => console.log("Tabelas sincronizads"))
    .catch((erro) => console.error("Erro ao sincroniezar", erro));


app.listen(PORT, () => { //porta 3000
    console.log("Servidor escutando!")
});
