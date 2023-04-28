const store = require("../../../store/dummy");
const controller = require("./controller");

// Todo esto se ha hecho para que, el día que quiera cambiar la DB, pueda simplemente
// inyectarla en el controlador a modo de constructor. Inyección de dependencias.
module.exports = controller(store);
