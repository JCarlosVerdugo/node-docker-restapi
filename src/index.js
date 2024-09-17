const app = require('./app');

const main = async () => {
    app.listen(3000);
    console.log('Server is running')
}

main();

// app.listen(3000, () => console.log('Server on port 3000'))