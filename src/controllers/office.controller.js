import { Office } from "../models/Office.js";

export async function createOffice(req, res) {
  const { medicId, name } = req.body;
  try {
    const newOffice = await Office.create({ medicId, name });
    res.json(newOffice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getMedicOffices(req, res) {
  const { id } = req.params;
  try {
    const offices = await Office.findAll({
      attributes: ["id", "medicId", "name"],
      where: { medicId: id },
    });
    res.json(offices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateOffice(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const office = await Office.findByPk(id);
    if (!office) {
      return res.status(404).json({ message: "Office not found" });
    }
    office.name = name;
    await office.save();
    res.json(office);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteOffice(req, res) {
  const { id } = req.params;
  try {
    const office = await Office.findByPk(id);
    if (!office) {
      return res.status(404).json({ message: "Office not found" });
    }
    await office.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}