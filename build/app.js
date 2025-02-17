"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const presupuestoRoutes_1 = __importDefault(require("./routes/presupuestoRoutes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use('/api', presupuestoRoutes_1.default);
// Inicializar el servidor
app.listen(3000, () => {
    console.log('Server on port 3000');
});
