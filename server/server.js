import express from 'express';
import mongoose from 'mongoose';

let app = express();
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {   
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.error('Error connecting to MongoDB:', err);
}); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
}
);
// app.post('/api/blogs', express.json(), (req, res) => {
//     const { title, description, author, image_url, readTime } = req.body;
//     if (!title || !description || !author || !image_url || !readTime) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

    
//     // Here you would typically save the blog to the database
//     // For now, we will just return the received data
//     res.status(201).json({
//         message: 'Blog created successfully',
//         blog: { title, description, author, image_url, readTime }
//     });
// }
// );



 let port=3000;
 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);

