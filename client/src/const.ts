// Constants for standalone version (no OAuth needed)
export const COOKIE_NAME = "session";
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

// Generate login URL - not used in standalone version
export const getLoginUrl = () => {
  return "/";
};
