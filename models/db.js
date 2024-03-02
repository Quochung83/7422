const mongoose = require('mongoose');

// Kết nôi tới MongoDB
mongoose.connect(
    'mongodb+srv://hung:hung@toyshop.tfdivun.mongodb.net/?retryWrites=true&w=majority&appName=ToyShop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Connected to MongoDB');
});

require('./toy.model');