describe('Newsfeed', function() {
  it('can view all posts in chronological order', async function() {
    // cy.task('userLog', {body: 'hello'});
    // cy.task('userCreate').then(function(result) {
    //   cy.visit('/newsfeed');
    //   cy.get('#posts').should('contain', 'I met a lovely fish today - by Jimothy Saladberg - Posted on 03/06/2020');
    // });
    await cy.task('userCreate', null, {timeout: 20});
    cy.visit('/newsfeed');
    cy.get('#posts').should('contain', 'nonsense - by Jimothy Saladberg - Posted on 03/06/2020');
  });
});