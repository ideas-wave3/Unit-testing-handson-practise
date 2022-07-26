import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';

import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  it('should check for submit handlers', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);

    await el.shadowRoot.querySelector('#nextbtn').click();
  })

  it('should contain vaild chars in first-name', async () => {
    const el = await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input`);
    expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  })

  it('should contain valid characters in last-name', async () => {
    const el = await fixture(html`<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`);
    expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  });

  it('should contain valid characters in e-mail', async () => {
    const el = await fixture(html`<lion-input-email label="${localize.msg('change-language:email')}"></lion-input-email>`);
    expect(el.label).to.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/);
  });

  it('should contain valid characters in mobile', async () => {
    const el = await fixture(html`<lion-input label="${localize.msg('change-language:mobilenumber')}"></lion-input>`);
    expect(el.label).to.match(/6|7|8|9|/);
  });

  it('should contain the amount field', async () => {
    const el = await fixture(html`<lion-input-amount label="${localize.msg('change-language:monthlysalary')}"></lion-input-amount>`);
    expect(el.label).to.equal('Monthly Salary');
  });

  it('should contain the amount field', async () => {
    const el = await fixture(html`<lion-input-amount label="${localize.msg('change-language:previousemi')}"></lion-input-amount>`);
    expect(el.label).to.equal('Previous EMIs Amount');
  });

  it('checks for emi details', async () => {
    const el = await fixture(html`<customer-details></customer-details>`);
     el.shadowRoot.querySelector('.backbg-btn-color').click();
  });

  
});
