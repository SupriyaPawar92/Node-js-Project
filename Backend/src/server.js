const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./routes');
const { sequelize } = require('./models');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(apiRoutes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync({ force: true });
  console.log('Database synced');
});
