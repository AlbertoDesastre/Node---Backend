/* Hago este archivo para ver si la estructura creada hasta ahora funciona, de ahí las funciones/db dummy 
Además, si un día tengo que cambiar de DB o las querys hacia ella, está modularizado en 
este archivo y si tengo que hacer un cambio lo hago solo aquí*/
const db = {
  user: [{ id: 1, name: "Don Luis" }],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let col = await list(table);

  return col.filter((item) => item.id === id)[0] || null;
}
//checkear si esto funciona antes de hacer commit
async function upsert(table, data) {
  db[table].push(data);
}
async function remove(table, id) {
  const indexOfUserToBeDeleted = db[table].findIndex((user) => user.id === id);
  // console.log("this is the index to be deleted --> ", indexOfUserToBeDeleted);
  db[table].splice(indexOfUserToBeDeleted, 1);

  return db[table];
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
