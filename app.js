const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./router/admin');

const shopRoutes=require('./router/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000);