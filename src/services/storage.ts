import type { User } from "../types";

const KEY = "lendsqr_selected_user";

export function saveUser(user: User): void {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getSavedUser(): User | null {
  const data = localStorage.getItem(KEY);
  if (!data) return null;
  return JSON.parse(data) as User;
}
