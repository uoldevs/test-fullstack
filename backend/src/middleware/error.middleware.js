const errorHandler = (error, _req, res) => {
  const { statusCode, message } = error;
  return res.status(statusCode || 500).json({ message });
};

module.exports = errorHandler;
