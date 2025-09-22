const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});