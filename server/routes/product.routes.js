const productController = require('../controllers/product.controller')




module.exports = app => {
    app.get("/api", productController.hello);
    
    app.get("/api/products",productController.allProducts)
    
    app.get("/api/products/:id", productController.oneProduct)
    
    app.post("/api/products", productController.addProduct);
    
    app.put("/api/products/:id", productController.updateProduct);
    
    app.delete("/api/products/:id", productController.deleteProduct);
    
    }