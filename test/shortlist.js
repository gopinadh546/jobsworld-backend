const mongoose = require("mongoose");

const jobs = require("../models/shortlist");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZTgyZjI4YThhNjExNTM3ZjBmYzMwIiwiaWF0IjoxNjUxMDcwNzIwfQ.Zc4VFdCf-ugjGVNIxO6SwV7pp9CkF9X5i3kAdVwVpuI";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);

describe("shortlist", () => {
  describe("/GET shortlist", () => {
    it("it should GET the shortlist with JWT token", (done) => {
      chai
        .request(app)
        .get("/shortlist")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("shortlist", () => {
  describe("/POST shortlist", () => {
    it("it should POST the shortlist using JWT token", (done) => {
      chai
        .request(app)
        .post("/shortlist")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});
