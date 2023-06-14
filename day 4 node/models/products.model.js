import mongoose from "mongoose";
const productsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 5,
      maxLength: 25,
    },
    price: {
      type: Number,
      min: 500,
      max: 10000,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productsSchema);
export default Product;
//The line const Product = mongoose.model("Product", productsSchema) creates a model named "Product" based on the productsSchema schema. This model represents a collection in MongoDB and provides an interface for interacting with the documents in that collection.

//When you define a model using mongoose.model(), it takes two arguments: the singular name of the model (e.g., "Product") and the schema that defines the structure and validation rules for the documents in the collection.

//In your code, the productsSchema defines the structure of the "Product" documents, specifying the fields (such as "title", "price", "description", and "category") and their respective data types and validation rules.

//Once the model is created with mongoose.model(), you can use it to perform various operations on the corresponding collection, such as creating new documents, querying existing documents, updating documents, and deleting documents.

//For example, you can create a new product document using new Product(req.body), as seen in your code snippet. The model provides methods like save() to save the document to the database.

//Overall, the line const Product = mongoose.model("Product", productsSchema) sets up the "Product" model based on the provided schema, allowing you to work with the "products" collection in MongoDB using the defined model and its associated methods
