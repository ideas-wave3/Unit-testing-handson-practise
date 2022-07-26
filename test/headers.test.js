import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block

let el;
  it('should display loan header', () => {
    expect(el).to.be.accessible;
  })

  let buttonEnglish;
  let buttonNetherland;
  beforeEach(async () => {
    el = await fixture(html`<loan-header></loan-header>`);
    buttonEnglish = el.shadowRoot.querySelector("button#en-GB")
    buttonNetherland = el.shadowRoot.querySelector("button#nl-NL");
  })

  it('should display EN title', () => {
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Apply Loan")
  })

  it('language should be accessible by the user', () => {
    expect(buttonEnglish).to.be.accessible;
    expect(buttonNetherland).to.be.accessible;
  })

  it("should have correct styles by default", () => {
    expect(buttonEnglish).not.to.have.class("btn-cursor")
    expect(buttonEnglish).to.have.class("bg-btn-color")
    expect(buttonNetherland).to.have.class("btn-cursor")
    expect(buttonNetherland).not.to.have.class("bg-btn-color")
  })  
  
  it("should display NL title on language change", async () => {
    buttonNetherland.click();
    await elementUpdated(el);
    expect(buttonNetherland).not.to.have.class("btn-cursor")
    expect(buttonNetherland).to.have.class("bg-btn-color")
    expect(buttonEnglish).to.have.class("btn-cursor")
    expect(buttonEnglish).not.to.have.class("bg-btn-color")
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Lening toepassen");
  })

  it("should display EN title on language change", async () => {
    buttonNetherland.click();
    buttonEnglish.click();
    await elementUpdated(el);
    expect(buttonEnglish).not.to.have.class("btn-cursor")
    expect(buttonEnglish).to.have.class("bg-btn-color")
    expect(buttonNetherland).to.have.class("btn-cursor")
    expect(buttonNetherland).not.to.have.class("bg-btn-color")
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Apply Loan");
  })


});
