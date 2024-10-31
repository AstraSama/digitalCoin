import "dotenv/config";
import "../database/conn.js";
import e from "express";
import transaction_route from "../http/routes/transaction_route.js";
import user_route from "../http/routes/user_route.js";
import wallet_route from "../http/routes/wallet_route.js"

const app = e();
const port = process.env.PORT || 4000;

app.use(e.json());

app.use("/transaction", transaction_route);
app.use("/user", user_route);
app.use("/wallet", wallet_route);

app.listen(process.env.PORT, () => console.log(`App running on ${port}!`));