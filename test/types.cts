import sdk = require("../dist/index.cjs");
const client = sdk.createBistryskladClient({
  baseUrl: "https://example.test",
  token: "synthetic",
});
client.products.create({ name: "CJS" });
// @ts-expect-error typed declarations are available for require()
client.products.create({ name: false });
