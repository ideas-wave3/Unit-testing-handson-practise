import { html, fixture, expect } from '@open-wc/testing';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails.js';
//  import Sinon from 'sinon';
 import { stub, spy} from 'sinon';
//import {jest} from '@jest/globals'

import '../src/LoanBasicDetails/BasicDetails.js';

describe('BasicDetails.js', () => {
  it('should be equal to', () => {
    const basicDetails = new BasicDetails();
    expect(basicDetails.amount).to.equal(10000)
  })

  it('should be the range', () => {
    const basicDetails = new BasicDetails();
    expect(basicDetails.range).to.equal(2);
  })

  it('should be the emiCalc', () => {
    const basicDetails = new BasicDetails();
    expect(basicDetails.emiCalc).to.equal(0);
  })

  it('should be a type', () => {
    const basicDetails = new BasicDetails();
    expect(basicDetails.type).to.equal('')
  })

  let el;
  let previousBtn;
  let nextBtn;
  beforeEach( async () => {
    localStorage.setItem("type", "Home Loan");
    el = await fixture(html`<basic-details></basic-details>`);
    previousBtn = el.shadowRoot.querySelector("lion-button.btn-previous");
    nextBtn = await el.shadowRoot.querySelector("lion-button.btn-next");
  })

  it("should display basic details", () => {
    expect(el).to.be.accessible;
  })

  it("should display correct loan type", () => {
    const typeInput = el.shadowRoot.querySelector("#type");
    expect(typeInput.value).to.equal("Home Loan");
  })

  let overview;
  it("should navigate to dashboard", () => {
    previousBtn.click();
    expect(overview).to.be.accessible;
  })

  it("should spy on _toDashboard", () => {
    const spyOn = spy(el, "_toDashboard");
    el._toDashboard();
    expect(spyOn.calledOnce).to.be.true;
  })



  it("should spy on _captureDetails", () => {
    const Myspy = spy(el, "_captureDetails");
    el._captureDetails();
    expect(Myspy.calledOnce).to.be.true;
  })

  it('should spy on fetch',()=>{
    const Myspy = spy(window,"fetch");
    nextBtn.click();
    expect(Myspy.calledOnce).to.be.true;
  })

  it("should append class error", () => {
    const amountInput = el.shadowRoot.querySelector("#amount");
    amountInput.value = 50;
    el._captureDetails();
    expect(amountInput).to.have.class("e-handle");
  })

  it("should spy on _numToWord", () => {
    const Myspy = spy(el, "_numToWord");
    const amountInput = el.shadowRoot.querySelector("#amount");
    amountInput.value = 50;
    el._numToWord();
    expect(el.shadowRoot.querySelector("#word").textContent.trim()).to.equal("fifty only")
    expect(Myspy.calledOnce).to.be.true;
  })


});
