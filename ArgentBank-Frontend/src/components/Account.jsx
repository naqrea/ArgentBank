import React from "react";

const Account = ({ bankCheck, amount }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking ({bankCheck})</h3>{" "}
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
