const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
//const uri = "mongodb+srv://shahid:<PASSWORD>@cluster0-1q7ty.mongodb.net/test"
const uri =  'mongodb+srv://leerPlusUser:Fgo96t34RUHxmCaH@cluster0-qswzu.mongodb.net/LeerPlusDB?retryWrites=true&w=majority'
// mongoose.connect(
// ,{useNewUrlParser: true});

MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("LeerPlusDB").collection("usuarios");
   collection.find().toArray((error, result) => {
    
    if(error) {
        console.log("error", error);
    }
    console.log("result", result);
    
});
   client.close();
});