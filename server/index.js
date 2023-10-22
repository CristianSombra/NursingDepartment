const app = require("./src/app");
const {sequelize} = require("./src/db");


//inicio servidor
app.listen(3001, () => {
    sequelize.sync({force: false}); //sincronizo la base de datos
    console.log("Listening on port 3001");

});

