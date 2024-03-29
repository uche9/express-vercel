 var express=require('express');
var app=express();
var cors=require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, Vercel! This is a simple Node.js server deployed on Vercel.');
});
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=app;