const requestOptions = {
  url: 'https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json',
  method: 'GET',
  headers: {
    Authorization:
      'OAuth oauth_consumer_key=F774DDBFEDE4CD05FF73CE84E0D163E6, oauth_token=F262F65385D95E2A89C5AE5EFA472182, oauth_signature_method=PLAINTEXT, oauth_signature=942B7D9972BEDABB1F48AD932C4E180B%2687710155F86ACB300742CA449AAC0AC0',
  },
  redirect: 'follow',
};
let responseBody: any;
const brandList: Array<any> = [];

describe('TradeMe Used Motor Search', () => {
  it('Search for Used Cars and number of Cars found', () => {
    cy.request(requestOptions).then(resp => {
      responseBody = resp.body; //storing in a global variable so that it can be used in other tests
      //cy.log(JSON.stringify(resp)); For debug purpose - to be deleted
      //cy.log(JSON.stringify(resp.body));
      cy.log(
        JSON.stringify('Total number of Cars Found: ' + responseBody.TotalCount)
      );
    });
  });

  it('Show number of Brand Categories with Name and count', () => {
    const countCategories = responseBody.FoundCategories.length;
    cy.log('Total number of Catergory/Brand Found: ' + countCategories);

    for (let ctr = 0; ctr < countCategories; ctr++) {
      cy.log('----------------------------------');
      cy.log('Brand Name : ' + responseBody.FoundCategories[ctr].Name);
      brandList.push(responseBody.FoundCategories[ctr].Name);
      cy.log('Count : ' + responseBody.FoundCategories[ctr].Count);
    }
    cy.log('----------------------------------');
  });

  it('Check that ‘Kia’ Brand exits', () => {
    expect(brandList).to.include('Kia');
  });

  it("Check that ‘Hispano Suiza’ Brand doesn't exits", () => {
    expect(brandList).not.to.include('Hispano Suiza');
  });
});
