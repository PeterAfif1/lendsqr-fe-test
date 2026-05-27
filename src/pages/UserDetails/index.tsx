import { useNavigate } from "react-router-dom";
import { getSavedUser } from "../../services/storage";
import "./UserDetails.scss";

export default function UserDetails() {
  const navigate = useNavigate();
  const user = getSavedUser();

  if (!user) {
    navigate("/dashboard/users");
    return null;
  }

  return (
    <div className="user-details">
      <button
        className="user-details__back"
        onClick={() => navigate("/dashboard/users")}
      >
        ← Back to Users
      </button>

      <div className="user-details__header">
        <h1>User Details</h1>
        <div className="user-details__actions">
          <button className="user-details__btn user-details__btn--blacklist">
            Blacklist User
          </button>
          <button className="user-details__btn user-details__btn--activate">
            Activate User
          </button>
        </div>
      </div>

      <div className="user-details__card">
        <div className="user-details__profile">
          <div className="user-details__avatar">
            <img src="/icons/user-detail-icon.svg" alt="avatar" />
          </div>
          <div>
            <h2>{user.fullName}</h2>
            <p>{user.userName}</p>
          </div>
          <div className="user-details__divider" />
          <div className="user-details__stars">
            <img src="/icons/star-filled.svg" alt="" />
            <img src="/icons/star-empty.svg" alt="" />
            <img src="/icons/star-empty.svg" alt="" />
          </div>
          <div className="user-details__divider" />
          <div>
            <h3>{user.accountBalance}</h3>
            <p>
              {user.accountNumber}/{user.bank}
            </p>
          </div>
        </div>

        <div className="user-details__tabs">
          <button className="user-details__tab user-details__tab--active">
            General Details
          </button>
          <button className="user-details__tab">Documents</button>
          <button className="user-details__tab">Bank Details</button>
          <button className="user-details__tab">Loans</button>
          <button className="user-details__tab">Savings</button>
          <button className="user-details__tab">App and System</button>
        </div>
      </div>

      <div className="user-details__info">
        <section className="user-details__section">
          <h4>Personal Information</h4>
          <div className="user-details__grid">
            <div>
              <p>Full Name</p>
              <span>{user.fullName}</span>
            </div>
            <div>
              <p>Phone Number</p>
              <span>{user.phoneNumber}</span>
            </div>
            <div>
              <p>Email Address</p>
              <span>{user.email}</span>
            </div>
            <div>
              <p>BVN</p>
              <span>{user.bvn}</span>
            </div>
            <div>
              <p>Gender</p>
              <span>{user.gender}</span>
            </div>
            <div>
              <p>Marital Status</p>
              <span>{user.maritalStatus}</span>
            </div>
            <div>
              <p>Children</p>
              <span>{user.children}</span>
            </div>
            <div>
              <p>Type of Residence</p>
              <span>{user.typeOfResidence}</span>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h4>Education and Employment</h4>
          <div className="user-details__grid">
            <div>
              <p>Level of Education</p>
              <span>{user.levelOfEducation}</span>
            </div>
            <div>
              <p>Employment Status</p>
              <span>{user.employmentStatus}</span>
            </div>
            <div>
              <p>Sector of Employment</p>
              <span>{user.sectorOfEmployment}</span>
            </div>
            <div>
              <p>Duration of Employment</p>
              <span>{user.durationOfEmployment}</span>
            </div>
            <div>
              <p>Office Email</p>
              <span>{user.officeEmail}</span>
            </div>
            <div>
              <p>Monthly Income</p>
              <span>{user.monthlyIncome}</span>
            </div>
            <div>
              <p>Loan Repayment</p>
              <span>{user.loanRepayment}</span>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h4>Socials</h4>
          <div className="user-details__grid">
            <div>
              <p>Twitter</p>
              <span>{user.twitter}</span>
            </div>
            <div>
              <p>Facebook</p>
              <span>{user.facebook}</span>
            </div>
            <div>
              <p>Instagram</p>
              <span>{user.instagram}</span>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h4>Guarantor</h4>
          <div className="user-details__grid">
            <div>
              <p>Full Name</p>
              <span>{user.guarantorName}</span>
            </div>
            <div>
              <p>Phone Number</p>
              <span>{user.guarantorPhone}</span>
            </div>
            <div>
              <p>Email Address</p>
              <span>{user.guarantorEmail}</span>
            </div>
            <div>
              <p>Relationship</p>
              <span>{user.guarantorRelationship}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
