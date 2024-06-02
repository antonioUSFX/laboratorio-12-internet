import { Router } from "express";
import {
  getMedics,
  createMedic,
  updateMedic,
  getMedic,
  deleteMedic,
  getMedicOffices,
} from "../controllers/medic.controller.js";

const router = Router();

// Rutas para Medic
router.post("/", createMedic);
router.get("/", getMedics);
router.put("/:id", updateMedic);
router.delete("/:id", deleteMedic);
router.get("/:id", getMedic);

// Ruta para obtener las oficinas de un médico
router.get("/:id/offices", getMedicOffices);

export default router;
