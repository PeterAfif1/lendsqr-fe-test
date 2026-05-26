import type { User, UserStatus } from "../types";

const orgs = ["Lendsqr", "Irorun", "Lendstar", "Mella", "Opay"];
const statuses: UserStatus[] = ["Active", "Inactive", "Pending", "Blacklisted"];
const genders = ["Male", "Female"];
const maritalStatuses = ["Single", "Married", "Divorced"];
const educationLevels = ["B.Sc", "M.Sc", "OND", "HND", "PhD"];
const employmentStatuses = ["Employed", "Self-Employed", "Unemployed"];
const sectors = ["FinTech", "Education", "Healthcare", "Retail", "Tech"];
const residenceTypes = [
  "Parent's Apartment",
  "Rented Apartment",
  "Own Apartment",
];
const banks = ["Access Bank", "GTBank", "Zenith Bank", "First Bank", "UBA"];
const relationships = ["Sister", "Brother", "Friend", "Spouse", "Colleague"];

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPhone(): string {
  return "0" + Math.floor(7000000000 + Math.random() * 2999999999);
}

function randomDate(): string {
  const start = new Date(2019, 0, 1);
  const end = new Date(2026, 6, 31);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function randomIncome(): string {
  const amount = Math.floor(50000 + Math.random() * 450000);
  return `₦${amount.toLocaleString()}`;
}

function randomAccountNumber(): string {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

const firstNames = [
  "Adedeji",
  "Debby",
  "Grace",
  "Tosin",
  "Chidi",
  "Amaka",
  "Emeka",
  "Fatima",
  "Bola",
  "Tunde",
];
const lastNames = [
  "Ogana",
  "Effiom",
  "Dokunmu",
  "Johnson",
  "Williams",
  "Okafor",
  "Adeyemi",
  "Bello",
  "Nwosu",
  "Ibrahim",
];

function generateUser(index: number): User {
  const firstName = random(firstNames);
  const lastName = random(lastNames);
  const fullName = `${firstName} ${lastName}`;
  const org = random(orgs);
  const userName = `${firstName.toLowerCase()}${index}`;
  const email = `${userName}@${org.toLowerCase()}.com`;

  return {
    id: `user-${index}`,
    orgName: org,
    userName,
    email,
    phoneNumber: randomPhone(),
    dateJoined: randomDate(),
    status: random(statuses),
    fullName,
    bvn: Math.floor(10000000000 + Math.random() * 90000000000).toString(),
    gender: random(genders),
    maritalStatus: random(maritalStatuses),
    children: String(Math.floor(Math.random() * 5)),
    typeOfResidence: random(residenceTypes),
    levelOfEducation: random(educationLevels),
    employmentStatus: random(employmentStatuses),
    sectorOfEmployment: random(sectors),
    durationOfEmployment: `${Math.floor(1 + Math.random() * 10)} years`,
    officeEmail: `${userName}@work.com`,
    monthlyIncome: randomIncome(),
    loanRepayment: randomIncome(),
    twitter: `@${userName}`,
    facebook: fullName,
    instagram: `@${userName}`,
    guarantorName: `${random(firstNames)} ${random(lastNames)}`,
    guarantorPhone: randomPhone(),
    guarantorEmail: `guarantor${index}@email.com`,
    guarantorRelationship: random(relationships),
    bank: random(banks),
    accountNumber: randomAccountNumber(),
    accountBalance: randomIncome(),
  };
}

let cachedUsers: User[] | null = null;

export function getUsers(): User[] {
  if (cachedUsers) return cachedUsers;
  cachedUsers = Array.from({ length: 500 }, (_, i) => generateUser(i + 1));
  return cachedUsers;
}

export function getUserById(id: string): User | undefined {
  return getUsers().find((u) => u.id === id);
}
