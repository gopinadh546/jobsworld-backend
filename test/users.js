const mongoose = require("mongoose");
const user = require("../models/user");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZTgyZjI4YThhNjExNTM3ZjBmYzMwIiwiaWF0IjoxNjUxMDcwNzIwfQ.Zc4VFdCf-ugjGVNIxO6SwV7pp9CkF9X5i3kAdVwVpuI";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);

describe("user", () => {
  describe("/GET user ", () => {
    it("it should get user details", (done) => {
      chai
        .request(app)
        .get("/user")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          res.body.should.have.property("user");
          done();
        });
    });
  });
});

describe("user", () => {
  describe("/GET user ", () => {
    it("it should not allow invalid token", (done) => {
      chai
        .request(app)
        .get("/user")
        .set({
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZTgyZjI4YThhNjExNTM3ZjBmYzMwIiwiaWF0IjoxNjUxMDcwNzIwfQ.Zc4VFdCf-ugjGVNIxO6SwV7pp9CkF9X5i3kAdVI`,
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});
