const config = {
    user: 'sa',
    password: 'SA_PASSWORD=YourStrong!Passw0rd',
    server: 'localhost',
    database: 'master'
    ,
    port: 1433,
    options: {
         encrypt: true, // ensure that the data transmitted between the client and the server is encrypted. Use this if you're on Windows Azure
         enableArithAbort: true, // it ensures that any arithmetic errors (such as divide-by-zero errors) will terminate the query.
        trustServerCertificate: true,
    }
};
