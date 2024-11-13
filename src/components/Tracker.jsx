import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/base.css";
import "../styles/utilities.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/tracker.css";

import logoAll from "../assets/icons/all.png";
import income from "../assets/icons/income.png";
import expense from "../assets/icons/spending.png";

const TransactionForm = () => {
  const [transaction, setTransaction] = useState({
    date: "",
    type: "Income",
    amount: "",
    note: "",
  });
};

const [transactions, setTransactions] = useState([]);
const [error, setError] = useState("");

const handleClick = (e) => {
  const { name, value } = e.target;
  setTransaction((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const AddTransaction = async () => {
  if (
    !transaction.date ||
    !transaction.type ||
    !transaction.name ||
    !transaction.amount ||
    !transaction.note
  ) {
    setError("All fields are required");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost/expense_tracker_react/src/php/storeTransaction.php",
      transaction
    );
    setTransactions((prev) => [...prev, response.data]);
    setTransaction({
      date: "",
      type: "Income",
      name: "",
      amount: "",
      note: "",
    });
    setError("");
  } catch (error) {
    console.error("Error adding transaction:", error);
    setError("Failed to add transaction");
  }
};

const Tracker = () => {
  return (
    <div>
      <section className="tracker full-width flex">
        <div className="sidebar flex column primary-bgColor space-evenly align-center">
          <img src={income} alt="Income Icon" width="100px" height="100px" />

          <img src={expense} alt="Spending Icon" width="100px" height="100px" />
          <img src={logoAll} alt="Spending Icon" width="100px" height="100px" />
        </div>

        <div className="container flex column">
          <div className="flex title space-between">
            <h1 className="primary-color">EXPENSE TRACKER</h1>
          </div>

          <div className="flex align-center gap search-bar">
            <p className="bold">SEARCH NOTE</p>
            <input type="text" placeholder="Search note..." id="filterNote" />
          </div>

          <div className="flex align-center gap input">
            <div>
              <p className="bold">DATE</p>
              <input
                type="date"
                name="date"
                value={transaction.date}
                onChange={handleChange}
                id="dateTransaction"
              />{" "}
            </div>
            <div>
              <p className="bold">TYPE</p>
              <select
                name="type"
                value={transaction.type}
                onChange={handleChange}
                id="typeTransaction"
              >
                <option value="Income">INCOME</option>
                <option value="Expense">EXPENSE</option>
              </select>
            </div>
            <div>
              <p className="bold">NAME</p>
              <input
                type="text"
                name="name"
                value={transaction.name}
                onChange={handleChange}
                id="nameTransaction"
                placeholder="Transaction Name"
              />
            </div>
            <div>
              <p className="bold">AMOUNT</p>
              <input
                type="number"
                name="amount"
                value={transaction.amount}
                onChange={handleChange}
                id="amountTransaction"
                placeholder="Amount"
              />
            </div>
            <div>
              <p className="bold">NOTE</p>
              <input
                type="text"
                name="note"
                value={transaction.note}
                onChange={handleChange}
                id="noteTransaction"
                placeholder="Notes"
              />{" "}
            </div>

            <button className="button" onClick={handleClick}>
              ADD
            </button>

            <div className="margin-top bold red-color">
              {error && <p>{error}</p>}
            </div>
          </div>

          <table className="full-width">
            <thead className="primary-bgColor white-color">
              <tr>
                <th>DATE</th>
                <th>TYPE</th>
                <th>NAME</th>
                <th>AMOUNT</th>
                <th>NOTE</th>
                <th colSpan="2"></th>
              </tr>
            </thead>

            <tbody className="primary-color" id="transactions">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.note}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="total">
            <tbody>
              <tr>
                <td className="primary-bgColor white-color bold">
                  TOTAL BUDGET
                </td>
                <td className="bold primary-color" id="total$">
                  {transactions.reduce(
                    (sum, transaction) => sum + parseFloat(transaction.amount),
                    0
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Tracker;
