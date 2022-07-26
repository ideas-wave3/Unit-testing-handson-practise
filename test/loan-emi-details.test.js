import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  let el;
  it("should display emi details", () => {
    expect(el).to.be.accessible;
  })

  
  let cancelBtn;
  let continueBtn;
  beforeEach(async () => {
    const data = {
      "interestRate": "7.00",
      "monthlyEMI": "447.73",
      "principal": "10000.00",
      "interest": "745.42",
      "totalAmount": "10745.42"
    }
    localStorage.setItem("type", "Home Loan");
    localStorage.setItem("emi", JSON.stringify(data));

    el = await fixture(html`<loanemi-details></loanemi-details>`);
    cancelBtn = el.shadowRoot.querySelector("lion-button.cancel-btn")
    continueBtn = el.shadowRoot.querySelector("lion-button.continue-btn")
  })

  afterEach(() => {
    localStorage.removeItem("emi");
  })
});
