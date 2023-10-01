const app = require("./src/app");
const {sequelize} = require("./src/db");
// const {loadStaffInDb} = require("./src/utils/loadData");

//inicio servidor
app.listen(3001, () => {
    sequelize.sync({force: false}); //sincronizo la base de datos


// setTimeout(loadStaffInDb,3000)
console.log("Listening on port 3001");

});

