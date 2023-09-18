const app = require("./app");
const config = require('./config/config')

const PORT = config.app.port;



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})





// Note
/*

1. api/users : GET
2. api/users/:id : GET
3. api/users : POST
4. api/users/:id: PATCH
5. api/users/:id => DELETE

*/