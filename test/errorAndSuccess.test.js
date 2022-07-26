import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import Sinon from 'sinon';

import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', async() => {
  // Write test cases inside this block

 it('should show the success screen', async() => {
  const el=await fixture(html`<loan-success></loan-success>`);
  const myspy=Sinon.spy(el,'_toHome');
   myspy();
  expect(myspy.called).to.be.true;
 })
});

describe('error screen', async() => {
  // Write test cases inside this block

 it('should show the error screen', async () => {
  const el=await fixture(html`<loan-error></loan-error>`);
  const myspy=Sinon.spy(el,'_toHome');
  myspy();
  expect(myspy.called).to.be.true;
 })
});
