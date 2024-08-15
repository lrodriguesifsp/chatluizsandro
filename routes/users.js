const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


router.get('/', async function(req, res, next) {
  const data = await prisma.user.findMany();
  return res.json(data)
});

router.post('/', async function(req, res, next) {  
  await prisma.user.create({ data: req.body });
  return res.send("Cadastro realizado com sucesso.")
});

// Atualizar o status
router.patch('/status/:id', async function(req, res, next) {
  const userId = parseInt(req.params.id, 10);
  const { status } = req.body;

  if (!status || !userId) {
    return res.status(400).json({ error: 'User ID and status are required' });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { status: status },
    });
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update status' });
  }
});

module.exports = router;
