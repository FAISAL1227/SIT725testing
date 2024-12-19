const connectDB = async () => {
   try {
       await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mongodbVSCodePlaygroundDB', {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       });
       console.log('MongoDB Connected...');
   } catch (error) {
       console.error('MongoDB connection error:', error);
       process.exit(1);
   }
 };
 