var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var Subscription = require("../../models/business/BusinessSubscription");

router.post("/save", async (req, res) => {
  let body = req.body;
  let subscribe = new Subscription.BusinessSubscription();
  subscribe.id = body.data.id;
  subscribe.subscribeid = body.data.subscribeid;
  subscribe.email = body.data.email;
 

  subscribe.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let subscribe = new Subscription.BusinessSubscription();
  subscribe.id = body.data.id;

  subscribe.get().then(
    (result) => {
      console.log(result);

      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let subscribe = new Subscription.BusinessSubscription();
  subscribe.list().then(
    (result) => {
      console.log(result);

      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  console.log(body);
  let subscribe = new Subscription.BusinessSubscription();
  subscribe.id = body.data.id;
  subscribe.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

module.exports = router;
