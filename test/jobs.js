const mongoose = require("mongoose");

const jobs = require("../models/jobs");

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);

describe("jobs", () => {
  describe("/GET jobs", () => {
    it("it should GET all the jobs", (done) => {
      chai
        .request(app)
        .get("/jobs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/POST jobs", () => {
    it("it is an authorised gateway", (done) => {
      chai
        .request(app)
        .post("/jobs")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/GET job", () => {
    it("it should GET the job by id", (done) => {
      chai
        .request(app)
        .get("/jobs/624f2a62a4593a750aee43b4")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/DELETE job", () => {
    it("it should DELETE the job by id", (done) => {
      chai
        .request(app)
        .delete("/jobs/624f2a62a4593a750aee43b4")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/GET jobform", () => {
    it("It should render edit form", (done) => {
      chai
        .request(app)
        .get("/jobs/edit/624f2a62a4593a750aee43b4")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/PUT jobform", () => {
    it("It should update job", (done) => {
      chai
        .request(app)
        .put("/jobs/edit/624f2be5a4593a750aee43b8")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});

describe("jobs", () => {
  describe("/GET applicants", () => {
    it("It should get all applicants for a job", (done) => {
      chai
        .request(app)
        .get("/jobs/624f2be5a4593a750aee43b8/applicants")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          done();
        });
    });
  });
});
