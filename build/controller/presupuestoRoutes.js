"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuestoController_1 = __importDefault(require("../controllers/presupuestoController"));
class PresupuestoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', presupuestoController_1.default.list);
        this.router.post('/', presupuestoController_1.default.create);
        this.router.delete('/:Id_Presupuesto', presupuestoController_1.default.delete);
        this.router.put('/:Id_Presupuesto', presupuestoController_1.default.update);
        this.router.get('/:Id_Presupuesto', presupuestoController_1.default.getOne);
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
exports.default = presupuestoRoutes.router;
