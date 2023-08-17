exports.setMessage = (res, req, next) => {
  res.json({
    success: true,
    message: "uuren operator irsen message save",
  });
};
