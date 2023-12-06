// @ts-nocheck
import UsersManager from "../services/UsersManager.js";
const usersManager = new UsersManager();

function onConnection(webSocketServer) {
  return async function (socket) {
    console.log(`New client connected: ${socket.id}`);
    // socket.broadcast.emit("newUser", socket.handshake.auth.usuario);

    // Listen to client's events
    socket.on("newProduct", async (productData) => {
      try {
        await usersManager.addProduct(productData);
        const allProducts = usersManager.getProducts();
        webSocketServer.emit("updateProductList", allProducts);
      } catch (error) {
        console.error("Error adding the product in real time:", error);
      }
    });

    socket.on("deleteProduct", async (productId) => {
      try {
        await usersManager.deleteProduct(productId);
        const allProducts = usersManager.getProducts();
        webSocketServer.emit("updateProductList", allProducts);
      } catch (error) {
        console.error("Error deleting the product in real time:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} has disconnected from the server`);
    });
  };
}

export default onConnection;
