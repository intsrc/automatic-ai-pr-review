const express = require('express');
const { verifyToken } = require('./auth');

const app = express();

app.get('/data', (req, res) => {
  const raw = req.header('Authorization')?.replace(/^Bearer\s+/i, '');
  try {
    const payload = verifyToken(raw);
    res.json({ ok: true, user: payload.sub });
  } catch {
    res.status(401).json({ ok: false, msg: 'bad token' });
  }
});

app.listen(3000, () => console.log('API listening on :3000'));
