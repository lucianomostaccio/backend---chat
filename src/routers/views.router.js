import { Router } from "express";
// import UsersManager from "../services/UsersManager.js";
const router = Router();
const viewsRouter = router;
// const usersManager = new UsersManager();


router.get("/", async (req, res) => {
  res.render("index",{});})
  // try {
  //   const products = await usersManager.getProducts();
  //   res.render("home", {
  //     titulo: "Products list",
  //     products,
  //     style: "home.css", //specific style file for this page
  //   });
  // } catch (error) {
  //   console.error("Error getting the products:", error);
  //   res.status(500).send("Internal server error");
  // }
//   try {
//     // const users = await usersManager.getUsers();
//     res.render("main", {
//       title: "Users list",
//       // users,
//       style: "home.css", //specific style file for this page
//     });
//   } catch (error) {
//     console.error("Error getting the users:", error);
//     res.status(500).send("Internal server error");
//   }
// });

// router.get("/realtimeproducts", async (req, res) => {
//   try {
//     const products = await usersManager.getProducts();
//     res.render("realTimeProducts", {
//       titulo: "Real time products list",
//       products,
//       style: "realTimeProducts.css", //specific style file for this page
//     });
//   } catch (error) {
//     console.error("Error rendering products in real time:", error);
//     res.status(500).send("Internal server error");
//   }
// });

export default viewsRouter;
