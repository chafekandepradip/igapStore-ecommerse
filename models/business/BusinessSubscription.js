const database = require("../Database");

class BusinessSubscription {
  id = 0;
  subscribeid = 0;
  email = "";
  query = "";
  db = new database.Database();

  constructor() {
    this.id = 0;
    this.subscribeid ="";
    this.email = "";
    this.query = "";
  }

  save = () => {
    if (this.id == 0) {
      this.query = "INSERT INTO business_subscriptions( subscribeid, email) ";
      this.query +="VALUES ('" + this.subscribeid + "', '" + this.email + "')";
      
    } 
    else {
      this.query = "UPDATE business_subscriptions SET subscribeid = '" + this.businessid + "','" + this.name + "' ";
      this.query += " WHERE id = " + this.id;
    }
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM  business_subscriptions WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM  business_subscriptions";
    console.log(this.query);
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM business_subscriptions WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
    BusinessSubscription: BusinessSubscription,
};
