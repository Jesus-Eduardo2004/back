"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    console.log('DB is connected');
    pool.releaseConnection(connection); // No olvides liberar la conexión
})
    .catch(err => {
    console.error('Error connecting to the database: ', err);
});
exports.default = pool;
