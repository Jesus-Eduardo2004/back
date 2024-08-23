"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.presupuestoController = void 0;
const database_1 = __importDefault(require("../database"));
class PresupuestoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const presupuestos = yield database_1.default.query('SELECT * FROM Presupuesto');
                res.json({ presupuestos });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener los presupuesto' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const presupuesto = req.body;
            console.log('Presupuesto:', presupuesto);
            try {
                yield database_1.default.query('INSERT INTO Presupuesto SET ?', [presupuesto]);
                res.json({ message: 'Presupuesto guardado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al crear el presupuesto' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield database_1.default.query('DELETE FROM Presupuesto WHERE Id_Presupuesto = ?', [id]);
                res.json({ message: 'El presupuesto fue eliminado' });
            }
            catch (err) {
                res.status(500).json({ error: 'Error al eliminar el presupuesto' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const presupuesto = req.body;
            console.log('Id_Presupuesto:', id);
            console.log('Presupuesto:', presupuesto);
            try {
                const result = yield database_1.default.query('UPDATE Presupuesto SET ? WHERE Id_Presupuesto = ?', [presupuesto, id]);
                if (result.affectedRows > 0) {
                    res.json({ message: 'El presupuesto fue actualizado' });
                }
                else {
                    res.status(404).json({ error: 'El presupuesto no fue encontrado o el usuario no coincide' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al actualizar el presupuesto' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const presupuesto = yield database_1.default.query('SELECT * FROM Presupuesto WHERE Id_Presupuesto = ?', [id]);
                if (presupuesto.length > 0) {
                    res.json(presupuesto[0]);
                }
                else {
                    res.status(404).json({ text: 'El presupuesto no existe' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Error al obtener el presupuesto' });
            }
        });
    }
}
exports.presupuestoController = new PresupuestoController();
exports.default = exports.presupuestoController;
