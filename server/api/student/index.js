(() => {
  "use strict";

  const router = require("express").Router();;
  const controller = require("./student.controller");

  // router.get("/", controller.list);
  router.post("/", controller.create);
  router.post("/:id", controller.update);

  module.exports = router;

})();