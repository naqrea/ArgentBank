import React from "react";

const Account = () => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>{" "}
        {/********* REDUX *********/}
        <p className="account-amount">$2,082.79</p>
        {/********* REDUX *********/}
        <p className="account-amount-description">Available Balance</p>
        {/********* REDUX *********/}
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
