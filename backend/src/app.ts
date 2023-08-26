import "express-async-errors";
import cors from "cors";
import express from "express";
import errorMiddleware from "./middlewares/errorMiddleware";
import ClientController from "./controller/ClientController";
import ClientService from "./service/ClientService";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", (req, res) =>
  new ClientController(req, res, new ClientService()).create(),
);
app.get("/clients", (req, res) =>
  new ClientController(req, res, new ClientService()).getAll(),
);
app.put("/update", (req, res) =>
  new ClientController(req, res, new ClientService()).update(),
);

app.use(errorMiddleware);

export default app;
