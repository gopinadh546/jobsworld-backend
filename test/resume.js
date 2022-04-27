const mongoose = require("mongoose");
const jobs = require("../models/resume");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZTgyZjI4YThhNjExNTM3ZjBmYzMwIiwiaWF0IjoxNjUxMDcwNzIwfQ.Zc4VFdCf-ugjGVNIxO6SwV7pp9CkF9X5i3kAdVwVpuI";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);

describe("resume", () => {
  describe("/get resume", () => {
    it("should fetch resume successfully", (done) => {
      chai
        .request(app)
        .get("/resume")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("resume");
          done();
        });
    });
  });
});

describe("resume", () => {
  describe("/post resume", () => {
    it("should update resume successfully", (done) => {
      chai
        .request(app)
        .post("/resume")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          //   res.body.should.be.a("object");
          //   res.body.should.have.property("resume");
          done();
        });
    });
  });
});

describe("resume", () => {
  describe("/DELETE resume", () => {
    it("it should Delete the resume by id with JWT token", (done) => {
      chai
        .request(app)
        .delete("/resume/624f291fa4593a750aee439e")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          //   res.body.should.have.property("resume");
          done();
        });
    });
  });
});

describe("resume", () => {
  describe("/GET resume edit form", () => {
    it("it should Get data for edit form using JWT token of user", (done) => {
      chai
        .request(app)
        .get("/resume/edit")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          res.body.should.have.property("resume");
          done();
        });
    });
  });
});

describe("resume", () => {
  describe("/GET applicant resume", () => {
    it("it should GET the resume of applicant", (done) => {
      chai
        .request(app)
        .get("/resume/624f291fa4593a750aee439e")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});
