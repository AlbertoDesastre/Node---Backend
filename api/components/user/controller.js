const store = require("../../../store/dummy");

const TABLE = "user";

/* Esto se hace así porque más tarde (en el archivo index de esta misma carpeta) se usará el controller
como un objeto. Este objeto se le pasará unas querys de DB como argumento. De alguna manera le tengo que inyectar
esa BD al controller, y eso se hace pasándolo como parámetro.

Una vez inyectado, el controller sigue funcionando normal. Cuando quiera usar una de las funciones de este
controller solo tendré que decir "Controler.(...)" y ya. Esto funciona porque de hecho hago un return con las 
funciones disponibles del controladorS*/
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!injectedStore) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    //id that comes from req.params it's always a string so it needs a casting
    const idNumber = Number(id);

    return store.get(TABLE, idNumber);
  }

  function create(data) {
    console.log(data);
    store.upsert(TABLE, data);

    return store.list(TABLE);
  }

  function remove(id) {
    //id that comes from req.params it's always a string so it needs a casting
    const idNumber = Number(id);
    store.remove(TABLE, idNumber);

    return store.list(TABLE);
  }

  return { list, get, create, remove };
};
