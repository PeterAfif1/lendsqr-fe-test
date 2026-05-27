import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";
import { saveUser } from "../../services/storage";
import type { User } from "../../types";
import "./Users.scss";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(getUsers());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    orgName: "",
    userName: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });
  const filteredUsers = users.filter((user) => {
    return (
      (filters.orgName === "" || user.orgName === filters.orgName) &&
      (filters.userName === "" ||
        user.userName.toLowerCase().includes(filters.userName.toLowerCase())) &&
      (filters.email === "" ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.phoneNumber === "" ||
        user.phoneNumber.includes(filters.phoneNumber)) &&
      (filters.status === "" || user.status === filters.status) &&
      (filters.date === "" || user.dateJoined.includes(filters.date))
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(start, start + itemsPerPage);

  function handleUserClick(user: User) {
    saveUser(user);
    navigate(`/dashboard/users/${user.id}`);
  }

  function getStatusClass(status: string) {
    return `users__status users__status--${status.toLowerCase()}`;
  }

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>

      <div className="users__stats">
        {[
          { label: "USERS", value: "2,453", icon: "/icons/users-icon.svg" },
          {
            label: "ACTIVE USERS",
            value: "2,453",
            icon: "/icons/active-users-icon.svg",
          },
          {
            label: "USERS WITH LOANS",
            value: "12,453",
            icon: "/icons/users-with-loans-icon.svg",
          },
          {
            label: "USERS WITH SAVINGS",
            value: "102,453",
            icon: "/icons/users-with-savings-icon.svg",
          },
        ].map(({ label, value, icon }) => (
          <div key={label} className="users__stat-card">
            <img src={icon} alt={label} className="users__stat-icon" />
            <p className="users__stat-label">{label}</p>
            <p className="users__stat-value">{value}</p>
          </div>
        ))}
      </div>

      <div className="users__table-wrapper">
        {showFilter && (
          <div className="users__filter-popup">
            <div className="users__filter-field">
              <label>Organization</label>
              <select
                value={filters.orgName}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, orgName: e.target.value }))
                }
              >
                <option value="">Select</option>
                {["Lendsqr", "Irorun", "Lendstar", "Mella", "Opay"].map(
                  (org) => (
                    <option key={org} value={org}>
                      {org}
                    </option>
                  ),
                )}
              </select>
            </div>

            <div className="users__filter-field">
              <label>Username</label>
              <input
                placeholder="User"
                value={filters.userName}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, userName: e.target.value }))
                }
              />
            </div>

            <div className="users__filter-field">
              <label>Email</label>
              <input
                placeholder="Email"
                value={filters.email}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>

            <div className="users__filter-field">
              <label>Date</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, date: e.target.value }))
                }
              />
            </div>

            <div className="users__filter-field">
              <label>Phone Number</label>
              <input
                placeholder="Phone Number"
                value={filters.phoneNumber}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, phoneNumber: e.target.value }))
                }
              />
            </div>

            <div className="users__filter-field">
              <label>Status</label>
              <select
                value={filters.status}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, status: e.target.value }))
                }
              >
                <option value="">Select</option>
                {["Active", "Inactive", "Pending", "Blacklisted"].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="users__filter-actions">
              <button
                className="users__filter-reset"
                onClick={() => {
                  setFilters({
                    orgName: "",
                    userName: "",
                    email: "",
                    date: "",
                    phoneNumber: "",
                    status: "",
                  });
                  setShowFilter(false);
                }}
              >
                Reset
              </button>
              <button
                className="users__filter-apply"
                onClick={() => setShowFilter(false)}
              >
                Filter
              </button>
            </div>
          </div>
        )}
        <table className="users__table">
          <thead>
            <tr>
              {[
                "ORGANIZATION",
                "USERNAME",
                "EMAIL",
                "PHONE NUMBER",
                "DATE JOINED",
                "STATUS",
              ].map((col) => (
                <th key={col}>
                  <span>{col}</span>
                  <img
                    src="/icons/filter.svg"
                    alt="Filter"
                    className="users__filter-icon"
                    onClick={() => setShowFilter((prev) => !prev)}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} onClick={() => handleUserClick(user)}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span className={getStatusClass(user.status)}>
                    {user.status}
                  </span>
                </td>
                <td className="users__actions-cell">
                  <img
                    src="/icons/more.svg"
                    alt="more"
                    className="users__more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(activeMenu === user.id ? null : user.id);
                    }}
                  />
                  {activeMenu === user.id && (
                    <div className="users__action-menu">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUserClick(user);
                        }}
                      >
                        <img src="/icons/view-details.svg" alt="" /> View
                        Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id
                                ? { ...u, status: "Blacklisted" }
                                : u,
                            ),
                          );
                          setActiveMenu(null);
                        }}
                      >
                        <img src="/icons/blacklist-user.svg" alt="" /> Blacklist
                        User
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id ? { ...u, status: "Active" } : u,
                            ),
                          );

                          setActiveMenu(null);
                        }}
                      >
                        <img src="/icons/activate-user.svg" alt="" /> Activate
                        User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="users__pagination">
        <div className="users__showing">
          <span>Showing</span>
          <select
            className="users__per-page"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>out of {users.length}</span>
        </div>

        <div className="users__pages">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) =>
                p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
            )
            .map((p, idx, arr) => (
              <>
                {idx > 0 && arr[idx - 1] !== p - 1 && (
                  <span key={`ellipsis-${p}`}>...</span>
                )}
                <button
                  key={p}
                  className={p === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              </>
            ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
