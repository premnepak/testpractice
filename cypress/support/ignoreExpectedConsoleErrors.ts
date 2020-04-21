import {includes} from 'lodash';

export const ignoreExpectedConsoleErrors = () => {
  cy.on('uncaught:exception', err => {
    const hasError = includes(err.stack, 'gtm.js');

    console.log('GTM error found... ignoring.');

    if (hasError) {
      return false;
    }
  });
};
