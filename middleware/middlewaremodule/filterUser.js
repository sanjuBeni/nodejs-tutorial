const filterUser = (req, res, next) => {
  if (!req.query.age) {
    res.send("Enter age");
  } else if (req.query.age < 18) {
    res.send("You cann't access this site");
  } else {
    next();
  }
};

module.exports = filterUser;
