export const currentTime: string = Cypress.moment()
  .format('h-mm-a-DD-MMM-YY')
  .toString();
