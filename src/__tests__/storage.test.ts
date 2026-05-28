import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getSavedUser } from "../services/storage";
import type { User } from "../types";

const mockUser: User = {
  id: "user-1",
  orgName: "Lendsqr",
  userName: "testuser",
  email: "test@lendsqr.com",
  phoneNumber: "08012345678",
  dateJoined: "Jan 1, 2023",
  status: "Active",
  fullName: "Test User",
  bvn: "12345678901",
  gender: "Male",
  maritalStatus: "Single",
  children: "0",
  typeOfResidence: "Rented Apartment",
  levelOfEducation: "B.Sc",
  employmentStatus: "Employed",
  sectorOfEmployment: "FinTech",
  durationOfEmployment: "2 years",
  officeEmail: "test@work.com",
  monthlyIncome: "₦200,000",
  loanRepayment: "₦50,000",
  twitter: "@testuser",
  facebook: "Test User",
  instagram: "@testuser",
  guarantorName: "John Doe",
  guarantorPhone: "08098765432",
  guarantorEmail: "guarantor@email.com",
  guarantorRelationship: "Friend",
  bank: "GTBank",
  accountNumber: "1234567890",
  accountBalance: "₦500,000",
};

describe("storage service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and retrieve a user", () => {
    saveUser(mockUser);
    const retrieved = getSavedUser();
    expect(retrieved).toEqual(mockUser);
  });

  it("should return null when no user is saved", () => {
    const user = getSavedUser();
    expect(user).toBeNull();
  });

  it("should overwrite previously saved user", () => {
    saveUser(mockUser);
    const updatedUser = { ...mockUser, userName: "updateduser" };
    saveUser(updatedUser);
    const retrieved = getSavedUser();
    expect(retrieved?.userName).toBe("updateduser");
  });
});
