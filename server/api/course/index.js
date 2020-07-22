(() => {
  "use strict";

  const router = require("express").Router();;
  const controller = require("./course.controller");

  router.post("/", controller.create);
  router.post("/:id", controller.update);

  module.exports = router;

})();