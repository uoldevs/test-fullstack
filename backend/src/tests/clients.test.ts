import * as sinon from "sinon";
import chai from "chai";
import chaiHttp = require("chai-http");
import app from "../app";
import {
  clientMock,
  findManyMock,
  clientNoIdMock,
  badClientCPFNoIdMock,
  updatedClientMock,
  badClientemailNoIdMock,
} from "./mocks/clientsMocks";
import prisma from "../../prisma/prisma";

chai.use(chaiHttp);
const { expect } = chai;

describe("/clients", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return status 200 and an array of clients at the route get /clients", async () => {
    sinon.replace(prisma.client, "findMany", sinon.fake.resolves(findManyMock));

    const response = await chai.request(app).get("/clients");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
    expect(response.body).to.be.deep.equal(findManyMock);
  });
});

describe("/create", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return status 201 and the created client", async () => {
    sinon.replace(prisma.client, "create", sinon.fake.resolves(clientMock));

    const response = await chai
      .request(app)
      .post("/create")
      .send(clientNoIdMock);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.keys(
      "name",
      "email",
      "cpf",
      "id",
      "phone",
      "status",
    );
  });

  it("should return status 400 and a message if there is no cpf", async () => {
    const response = await chai
      .request(app)
      .post("/create")
      .send(badClientCPFNoIdMock);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({
      message: "field: cpf, message: CPF inválido",
    });
  });
});

describe("/update", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return status 201 and the updated client", async () => {
    sinon.replace(
      prisma.client,
      "update",
      sinon.fake.resolves(updatedClientMock),
    );

    const response = await chai
      .request(app)
      .put("/update")
      .send(updatedClientMock);

    expect(response.status).to.equal(201);
    expect(response.body).to.be.deep.equal(updatedClientMock);
  });

  it("should return status 400 and a message the email format is invalid", async () => {
    const response = await chai
      .request(app)
      .post("/create")
      .send(badClientemailNoIdMock);

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({
      message: "field: email, message: Invalid email",
    });
  });
});
