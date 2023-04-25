/* Hago este archivo para ver si la estructura creada hasta ahora funciona, de ahí las funciones/db dummy 
Además, si un día tengo que cambiar de DB o las querys hacia ella, está modularizado en 
este archivo y si tengo que hacer un cambio lo hago solo aquí*/
const db = {
  user: [{ id: 1, name: "Don Luis" }],
};

function list(table) {
  return db[table];
}
function get(table, id) {
  let col = list(table);
  return col.filter((item) => item.id === id)[0] || null;
}
function upsert(table, data) {
  db[collection].push(data);
}
function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
