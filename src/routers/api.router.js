import { Router } from "express";
const router = Router();
import productRouter from "./users.router.js";
import cartRouter from "./messages.router.js";

const apiRouter = router;

apiRouter.use("/api/products", productRouter);
apiRouter.use("/api/carts", cartRouter);


export default apiRouter;
