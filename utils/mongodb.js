const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost/9006";

if (!MONGODB_URI) {
  throw new Error("Your mongodb uri is not defined!");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

module.exports = async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then(client => {
      return client;
    });
  }
  cached.conn = await cached.promise;

  return cached.conn;
};
