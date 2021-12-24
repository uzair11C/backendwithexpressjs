var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');


async function getProduct() {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request().query("SELECT * from product");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addProduct(product)
{
    try
    {
        let pool = await sql.connect(config)
        let insertProduct = await pool.request()
                .query(`INSERT INTO product (Name) VALUES
                ('${product.Name}')`)

        return insertProduct.recordsets
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = 
{
    getProduct : getProduct,
    addProduct : addProduct
}