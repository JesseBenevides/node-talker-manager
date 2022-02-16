const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const loginHandler = require('./middlewares/loginHandler');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const createTalker = require('./middlewares/createTalker');
const validateTalkerName = require('./middlewares/validateTalkerName');
const validateTalkerAge = require('./middlewares/validateTalkerAge');
const validateToken = require('./middlewares/validateToken');
const validateTalkInfos = require('./middlewares/validateTalkInfos');
const validateTalkDate = require('./middlewares/validateTalkDate');
const validateTalkRate = require('./middlewares/validateTalkRate');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkerById);

app.post(
  '/login',
  validateEmail,
  validatePassword,
  loginHandler,
);

app.post(
  '/talker',
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkInfos,
  validateTalkDate,
  validateTalkRate,
  createTalker,
);

app.put(
  '/talker/:id',
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkInfos,
  validateTalkDate,
  validateTalkRate,
  editTalker,
);

app.delete(
  '/talker/:id',
  validateToken,
  deleteTalker,
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
