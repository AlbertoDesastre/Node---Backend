const express = require("express");
const router = express.Router();

const response = require("../../../network/response");
const Controller = require("./index");

// Este archivo se encarga de conectarse a la red
router.get("/", list);
router.get("/:id", get);
router.post("/create", create);
router.delete("/delete/:id", remove);

function list(req, res) {
  /* Ojo porque el VS no me avisó esta vez de que efectivamente el controller era una promesa.
  Revisar por qué */
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function create(req, res) {
  const { id, name } = req.body;
  const data = { id, name };

  Controller.create(data)
    .then((list) => {
      response.success(req, res, list, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function remove(req, res) {
  Controller.remove(req.params.id)
    .then((list) => {
      response.success(req, res, list, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
module.exports = router;
