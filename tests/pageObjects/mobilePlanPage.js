class MobilePlanPage {
    constructor() {
      this.url = ''
    }

    loaded() {
      return true
    }
    
    visit() {
      cy.visit(this.url);
    }
    
    getUserAvatar() {
      return cy.get(`[data-testid=UserAvatar]`);
    }
    
    goToSignIn() {
      const link = this.header.getSignInLink();
      link.click();
  
      const signIn = new SignInPage();
      return signIn;
    }
  }
  
  export default MobilePlanPage.new();