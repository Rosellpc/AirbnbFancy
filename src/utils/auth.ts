export type User = {
  name: string;
  email: string;
  password: string;
};

const USERS_KEY = "airbnb_host_users";
const SESSION_KEY = "airbnb_host_user";

function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function register(user: User): boolean {
  const users = getUsers();

  if (users.some((item) => item.email === user.email)) {
    return false;
  }

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  return true;
}

export function login(email: string, password: string): boolean {
  const user = getUsers().find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) {
    return false;
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  );

  return true;
}

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem(SESSION_KEY));
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}