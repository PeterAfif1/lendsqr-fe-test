import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";
import { saveUser } from "../../services/storage";
import type { User } from "../../types";
import "./Users.scss";

export default function Users() {
  const navigate = useNavigate();
  const allUsers = getUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentUsers = allUsers.slice(start, start + itemsPerPage);

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
          <span>out of {allUsers.length}</span>
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
