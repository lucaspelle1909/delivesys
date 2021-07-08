const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const envRoot = require("./../../utils");
const env = envRoot.NODE_ENV || "development";
const config = require("../../config/database.js")[env];

const db = {};
const sequelize = new Sequelize(config);

function registerModuleModels(moduleName) {
  
  const pathToImport = __dirname + `/../../modules/${moduleName}/app/models`;

  fs.readdirSync(pathToImport)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 &&
        file !== path.basename(__filename) &&
        file.slice(-3) === ".js"
    )
    .forEach((file) => {
      const model = sequelize.import(path.join(pathToImport, file));
      db[model.name] = model;
    });
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });


registerModuleModels("clients");
registerModuleModels("suppliers");
registerModuleModels("pdv");
registerModuleModels("users");
registerModuleModels("nfe");
registerModuleModels("carriers");

Object.keys(db).forEach((modelName) => {

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
