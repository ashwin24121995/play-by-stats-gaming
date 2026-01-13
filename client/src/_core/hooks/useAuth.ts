// Authentication hook - not used in standalone version
// Games use localStorage for player data

export function useAuth() {
  return {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    refresh: () => {},
    logout: () => {},
  };
}
