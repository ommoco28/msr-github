exports.setMessage = (req, res, next) => {
  res.json({
    success: true,
    message: "database save message",
  });
};
exports.sendMessage = (req, res, next) => {
  res.json({
    success: true,
    message: "uuren operator ruu ilgeene",
  });
};
exports.home = (req, res, next) => {
  res.json({
    success: true,
    message: "welcome to msr",
  });
};
