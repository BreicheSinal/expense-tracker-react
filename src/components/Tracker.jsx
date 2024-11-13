import React from "react";

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
    type: "",
    amount: "",
    note: "",
  });
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
            <div className="flex gap justify-center align-center filters">
              <div>
                <p className="bold">TYPE</p>
                <select id="filterType">
                  <option value="All">All</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
              <div>
                <p className="bold">PRICE</p>
                <select id="filterPrice">
                  <option value="None">None</option>
                  <option value="Minimum">Minimum</option>
                  <option value="Maximum">Maximum</option>
                </select>
              </div>
              <div>
                <p className="bold">DATE</p>
                <select id="filterDate">
                  <option value="None">None</option>
                  <option value="Earliest">Earliest</option>
                  <option value="Latest">Latest</option>
                </select>
              </div>
              <button className="button" id="applyBttn">
                Apply Filters
              </button>
            </div>
          </div>

          <div className="flex align-center gap search-bar">
            <p className="bold">SEARCH NOTE</p>
            <input type="text" placeholder="Search note..." id="filterNote" />
          </div>

          <div className="flex align-center gap input">
            <div>
              <p className="bold">DATE</p>
              <input type="date" id="dateTransaction" />
            </div>
            <div>
              <p className="bold">TYPE</p>
              <select id="typeTransaction">
                <option value="Income">INCOME</option>
                <option value="Expense">EXPENSE</option>
              </select>
            </div>
            <div>
              <p className="bold">NAME</p>
              <input
                type="text"
                id="nameTransaction"
                placeholder="Transaction Name"
              />
            </div>
            <div>
              <p className="bold">AMOUNT</p>
              <input
                type="number"
                id="amountTransaction"
                placeholder="Amount"
              />
            </div>
            <div>
              <p className="bold">NOTE</p>
              <input type="text" id="noteTransaction" placeholder="Notes" />
            </div>

            <button className="button" onClick={handleClick}>
              ADD
            </button>

            <div className="margin-top bold red-color" id="resMsg"></div>
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

            <tbody className="primary-color" id="transactions"></tbody>
          </table>

          <table className="total">
            <tbody>
              <tr>
                <td className="primary-bgColor white-color bold">
                  TOTA BUDGET
                </td>
                <td className="bold primary-color" id="total$">
                  0
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
