// ---------In summary, these controller functions(getProducts and postProducts) utilize the Product model to perform database operations such as fetching products or creating new products and saving them to the MongoDB database. The responses are sent back to the client in the form of JSON objects with appropriate status codes and messages.----------------------------------//

import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); //When you execute Product.find(), Mongoose internally performs a query to the MongoDB database, specifically targeting the "products" collection. It retrieves all documents present in that collection and returns them as an array.
    if (products > 0) {
      res.status(200).json({
        status: true,
        data: products,
        message: "products fetched successfully",
      });
    } else {
      res.status(404).json({
        status: false,
        message: "no products found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const postProducts = async (req, res) => {
  try {
    const prods = new Product(req.body); //This line creates a new product object based on the Product model. The req.body contains the data sent in the request, typically when creating or updating a product.
    await prods.save(); //The prods.save() method explicitly saves the product instance as a new document in the "products" collection.
    //const prods = await Product.create(req.body); //alternative for above code, The Product.create() method is a convenience method provided by Mongoose that combines creating a new document and saving it in one step.
    res.status(200).json({
      status: true,
      data: prods,
      message: "products created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
//--------------How, prods.save() saves the product object as a new document in 'products' collection------------------------
//When you use the await prods.save() method, Mongoose internally handles the creation of the collection if it doesn't already exist. It infers the collection name based on the model name, which in this case is "Product". Mongoose will then create a collection named "products" (lowercase and pluralized) and store the document within it.

//The first time you save a document using prods.save(), the "products" collection will be created in the database (e.g., "test" database if not explicitly specified). Subsequent save operations will add new documents to the existing "products" collection.

//Therefore, by executing await prods.save(), you are effectively saving the document (product data from req.body) to the "products" collection, and if the collection doesn't exist, it will be automatically created by Mongoose.
