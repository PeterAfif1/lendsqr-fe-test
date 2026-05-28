import { describe, it, expect } from "vitest";
import { getUsers, getUserById } from "../services/api";

describe("api service", () => {
  it("should return 500 users", () => {
    const users = getUsers();
    expect(users).toHaveLength(500);
  });

  it("should return the same users on multiple calls", () => {
    const first = getUsers();
    const second = getUsers();
    expect(first).toBe(second);
  });

  it("should return a user by id", () => {
    const user = getUserById("user-1");
    expect(user).toBeDefined();
    expect(user?.id).toBe("user-1");
  });

  it("should return undefined for invalid id", () => {
    const user = getUserById("invalid-id");
    expect(user).toBeUndefined();
  });
});
