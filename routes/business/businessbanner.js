var express = require("express");
var BusinessBanner = require("../../models/business/BusinessBanner");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessbanners = new BusinessBanner.BusinessBanner();
  businessbanners.id = body.data.id;
  businessbanners.businessid = body.data.businessid;
  businessbanners.title = body.data.title;
  businessbanners.link = body.data.link;

//   businessbanners.picpath = body.data.picpath;
  businessbanners.imagecode = body.data.imagecode;
  businessbanners.srno = body.data.srno;
  
  businessbanners.save().then(
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
  let businessbanners = new BusinessBanner.BusinessBanner();
//   businessbanners.businessid = body.data.businessid;

  businessbanners.list().then(
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
  let businessbanners = new BusinessBanner.BusinessBanner();
  businessbanners.id = body.data.id;
  businessbanners.delete().then(
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
  let businessbanners = new BusinessBanner.BusinessBanner();
  businessbanners.id = body.data.id;
  businessbanners.get().then(
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