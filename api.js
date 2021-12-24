const dboperations = require('./dboperations')
var express = require('express');
// var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(express.urlencoded(
            { 
                extended: true 
            }
        )
    );
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.use((request,response,next)=>{
    //console.log('middleware');
    next();
 })

// router.route('/product').get((request,response)=>{

//     dboperations.getProduct().then(result => 
//         {
//             response.json(result[0]);
//         })

// })
app.get('/product',(request,response)=>{

    dboperations.getProduct().then(result => 
        {
            response.json(result[0]);
        })
})

app.post('/product',(request,response) =>
{
    let product = {...request.body}
    dboperations.addProduct(product).then(
        result => 
        {
            response.status(201).json(result);
        }
    )
})

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Order API is runnning at ' + port);