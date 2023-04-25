import jwt from "jsonwebtoken";
export const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "48h",
  });
};

// import jwt from "jsonwebtoken";
// export const createResetToken = (payload) => {
//   return jwt.sign(payload, process.env.RESET_TOKEN_SECRET, {
//     expiresIn: "1h",
//   });
// };
