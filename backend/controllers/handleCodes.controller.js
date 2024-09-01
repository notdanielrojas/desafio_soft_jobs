const handleErrors = (code) => {
  switch (code) {
    case "22P02":
      return {
        status: 400,
        message: "Invalid parameter format.",
      };
    case "23502":
      return {
        status: 400,
        message: "Missing required data.",
      };
    case "400":
      return {
        status: 400,
        message: "Insufficient data.",
      };
    case "404":
      return {
        status: 404,
        message: "User not found.",
      };
    case "401":
      return {
        status: 401,
        message: "Invalid email or password.",
      };
    case "NO_TOKEN":
      return {
        status: 401,
        message: "Token not provided.",
      };
    case "INVALID_TOKEN":
      return {
        status: 401,
        message: "Invalid token.",
      };
    default:
      return {
        status: 500,
        message: "Internal server error.",
      };
  }
};

module.exports = { handleErrors };
