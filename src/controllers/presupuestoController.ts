import { Request, Response } from 'express';
import pool from '../database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

class PresupuestoController {
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const [presupuestos] = await pool.query<RowDataPacket[]>('SELECT * FROM Presupuesto');
      res.json(presupuestos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los presupuestos' });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    const presupuesto = req.body;
    try {
      await pool.query<ResultSetHeader>('INSERT INTO Presupuesto SET ?', [presupuesto]);
      res.json({ message: 'Presupuesto guardado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el presupuesto' });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await pool.query<ResultSetHeader>('DELETE FROM Presupuesto WHERE Id_Presupuesto = ?', [id]);
      res.json({ message: 'El presupuesto eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el presupuesto' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const presupuesto = req.body;
    try {
      const [result] = await pool.query<ResultSetHeader>('UPDATE Presupuesto SET ? WHERE Id_Presupuesto = ?', [presupuesto, id]);
      if (result.affectedRows > 0) {
        res.json({ message: 'El presupuesto modificado' });
      } else {
        res.status(404).json({ error: 'El presupuesto no fue encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el presupuesto' });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const [presupuesto] = await pool.query<RowDataPacket[]>('SELECT * FROM Presupuesto WHERE Id_Presupuesto = ?', [id]);
      if (presupuesto.length > 0) {
        res.json(presupuesto[0]);
      } else {
        res.status(404).json({ text: 'El presupuesto no existe' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el presupuesto' });
    }
  }
}

export const presupuestoController = new PresupuestoController();
export default presupuestoController;
