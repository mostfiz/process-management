const express = require('express');
const bodyParser = require('body-parser');
const { Process, Log } = require('./models');
const cron = require('node-cron');

const app = express();
app.use(bodyParser.json());

app.post('/create-process', async (req, res) => {
  const process = await Process.create({ name: req.body.name });
  res.status(201).json(process);
});

app.get('/get-all', async (req, res) => {
  const processes = await Process.findAll({attributes: ['id', 'createdAt']});
  res.json(processes);
});

app.get('/get-single/:id', async (req, res) => {
  const process = await Process.findByPk(req.params.id, { include: [{
    model: Log,
    attributes: ['loggedAt']
  }] });

  if (process) {
    const result = {
        processId: process.id,
        loggedAt: process.Logs.map(log => log.loggedAt) // Assuming Logs is an array
    };

    res.json(result);
    } else {
        res.status(404).send('Process not found');
    }
//   res.json(process);
});

app.delete('/delete-process/:id', async (req, res) => {
  await Process.destroy({ where: { id: req.params.id } });
  res.status(200).send('Deleted Successfully');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


cron.schedule('*/5 * * * *', async () => {
  const processes = await Process.findAll();
  processes.forEach(async (process) => {
    await Log.create({ processId: process.id, loggedAt: new Date() });
  });
});

module.exports = app;
