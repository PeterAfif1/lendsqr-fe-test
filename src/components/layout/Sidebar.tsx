import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const navItems = [
  {
    section: "CUSTOMERS",
    links: [
      { label: "Users", icon: "/icons/users.svg", to: "/dashboard/users" },
      {
        label: "Guarantors",
        icon: "/icons/guarantors.svg",
        to: "/dashboard/guarantors",
      },
      { label: "Loans", icon: "/icons/loans.svg", to: "/dashboard/loans" },
      {
        label: "Decision Models",
        icon: "/icons/decision-models.svg",
        to: "/dashboard/decision-models",
      },
      {
        label: "Savings",
        icon: "/icons/savings.svg",
        to: "/dashboard/savings",
      },
      {
        label: "Loan Requests",
        icon: "/icons/loan-requests.svg",
        to: "/dashboard/loan-requests",
      },
      {
        label: "Whitelist",
        icon: "/icons/whitelist.svg",
        to: "/dashboard/whitelist",
      },
      { label: "Karma", icon: "/icons/karma.svg", to: "/dashboard/karma" },
    ],
  },
  {
    section: "BUSINESSES",
    links: [
      {
        label: "Organization",
        icon: "/icons/organization.svg",
        to: "/dashboard/organization",
      },
      {
        label: "Loan Products",
        icon: "/icons/loan-products.svg",
        to: "/dashboard/loan-products",
      },
      {
        label: "Savings Products",
        icon: "/icons/savings-products.svg",
        to: "/dashboard/savings-products",
      },
      {
        label: "Fees and Charges",
        icon: "/icons/fees-and-charges.svg",
        to: "/dashboard/fees-and-charges",
      },
      {
        label: "Transactions",
        icon: "/icons/transactions.svg",
        to: "/dashboard/transactions",
      },
      {
        label: "Services",
        icon: "/icons/services.svg",
        to: "/dashboard/services",
      },
      {
        label: "Service Account",
        icon: "/icons/service-account.svg",
        to: "/dashboard/service-account",
      },
      {
        label: "Settlements",
        icon: "/icons/settlements.svg",
        to: "/dashboard/settlements",
      },
      {
        label: "Reports",
        icon: "/icons/reports.svg",
        to: "/dashboard/reports",
      },
    ],
  },
  {
    section: "SETTINGS",
    links: [
      {
        label: "Preferences",
        icon: "/icons/preferences.svg",
        to: "/dashboard/preferences",
      },
      {
        label: "Fees and Pricing",
        icon: "/icons/fees-and-pricing.svg",
        to: "/dashboard/fees-and-pricing",
      },
      {
        label: "Audit Logs",
        icon: "/icons/audit-logs.svg",
        to: "/dashboard/audit-logs",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src="/lendsqr-logo.svg" alt="Lendsqr" />
      </div>

      <div className="sidebar__org">
        <img src="/icons/switch-organization.svg" alt="Switch Organization" />
        <span>Switch Organization</span>
        <img src="/icons/dropdown.svg" alt="" className="sidebar__org-caret" />
      </div>

      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `sidebar__home${isActive ? " sidebar__link--active" : ""}`
        }
      >
        <img src="/icons/dashboard.svg" alt="Dashboard" />
        <span>Dashboard</span>
      </NavLink>

      <nav className="sidebar__nav">
        {navItems.map(({ section, links }) => (
          <div key={section} className="sidebar__group">
            <p className="sidebar__section-label">{section}</p>
            {links.map(({ label, icon, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? " sidebar__link--active" : ""}`
                }
              >
                <img src={icon} alt={label} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
