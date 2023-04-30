const express = require("express");
const router = express.Router();

const response = require("../../../network/response");
const Controller = require("./index");

router.use(express.json());

// Este archivo se encarga de conectarse a la red
router.get("/", function (req, res) {
  /* Ojo porque el VS no me avisó esta vez de que efectivamente el controller era una promesa.
  Revisar por qué */
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.get("/:id", function (req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.post("/create", function (req, res) {
  const { id, name } = req.body;
  const data = { id, name };

  Controller.create(data)
    .then((list) => {
      response.success(req, res, list, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.delete("/delete/:id", function (req, res) {
  Controller.remove(req.params.id)
    .then((list) => {
      response.success(req, res, list, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

module.exports = router;
