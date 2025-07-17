import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    { 
        title :{type : String, required: true},
        author :{type : String, required: true  }
    },
    {collection: "books"}
);

const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;