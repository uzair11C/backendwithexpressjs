const config = {
    user: 'sa',
    password: '123',
    driver: "msnodesqlv8",
    server: 'UZAIR-S_PC\\SQLEXPRESS',
    database: 'LearningExpressJS',
    options: {
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true,
        instancename : 'SQLEXPRESS'
    },
    port: 58018
}

module.exports = config