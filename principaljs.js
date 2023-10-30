

  app.post('/logout', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  });
  
  