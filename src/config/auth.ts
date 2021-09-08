export default {
  secret_token: process.env.JWT_SECRET,
  expires_in_token: process.env.JWT_SECRET_EXPIRES_IN,
  secret_refresh_token: process.env.JWT_SECRET_REFRESH,
  expires_in_refresh_token: process.env.JWT_SECRET_REFRESH_EXPIRES_IN,
  expires_refresh_token_days: process.env.EXPIRES_REFRESH_TOKEN_DAYS,
};
