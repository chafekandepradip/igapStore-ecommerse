var express = require("express");
var BusinessAdd = require("../../models/business/BusinessAdd");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessadds = new BusinessAdd.BusinessAdd();
  businessadds.id = body.data.id;
  businessadds.businessid = body.data.businessid;
  businessadds.title = body.data.title;
  businessadds.link = body.data.link;

//   businessadds.picpath = body.data.picpath;
  businessadds.imagecode = body.data.imagecode;
  businessadds.srno = body.data.srno;
  
  businessadds.save().then(
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

router.post("/list", async (req, res) => {
  let body = req.body;  
  let businessadds = new BusinessAdd.BusinessAdd();
//   businessadds.businessid = body.data.businessid;

  businessadds.list().then(
    result => {
      let data = {
        data: {
          "status": "success",
          "data": result
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
  let businessadds = new BusinessAdd.BusinessAdd();
  businessadds.id = body.data.id;
  businessadds.delete().then(
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
  let businessadds = new BusinessAdd.BusinessAdd();
  businessadds.id = body.data.id;
  businessadds.get().then(
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