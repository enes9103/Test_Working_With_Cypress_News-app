describe('Header test', () => {

  beforeEach(() => {
          const url =
          "https://newsapi.org/v2/everything?" +
          "q=Apple&" +
          "from=2022-04-18&" +
          "sortBy=popularity&" +
          "apiKey=02d142c50d8b4247b974b25323435174";
          cy.request(url).then((res) =>{
              console.log("responseeeeeeeee", res)
          })
          //istek sorgulaması yaptık
          cy.log('I run before every test in every spec file!!!!!!')
          
        })
        // beforeEach her it ten önce çalışıyo

  it('Clarusway events', () => {
      cy.visit("http://localhost:3000/login")
      // cy.visit("/login")// "baseUrl": "http://localhost:3000/" 
      //cypress.jsona baseUrl i tanımladığımız için bu şekilde kullanabiliyoruz
    console.log("Hi, I'm a test!");
    cy.log("Hi, I'm a test!");
    cy.wait(5000)
    cy.contains("CLARUSWAY NEWS")
    //içine yazdığımız texti sayfa içeriyor mu ona bakıyoruz.case sensitivedir
   
    cy.contains("CLARUSWAY NEWS").click()
  //   cy.pause()//testi durduryor
  })
  it("Register Control", () => {
      cy.viewport("iphone-6")//media query ye bakabiliyoruz
      cy.contains("Register")
      // registere tıkladığımda url değişmeli
      cy.contains("Register").click().wait(2000)
      cy.url().should('include', 'http://localhost:3000/register')
      cy.contains("Register").click().wait(2000)
  })  
  
  it('register with email', () =>{
          var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
          var string = '';
          for(var ii=0; ii<8; ii++){
                      string += chars[Math.floor(Math.random() * chars.length)];
          }
          var email = string +'@clarusway.com'
          //random email oluşturup register olduk
          cy.log(email);
           cy.contains('Register').click()
           cy.get('#email').type(email).should('have.value', email)
           cy.get('input[name="password"]').type(email)
              // click button
          cy.get('body').children('div').children('div').children('div').eq(1).children('div div').children('form').contains('Register').click()
          //dom ile yakalamış olduk register butonunu
          })
  // it('type email', () => {
  //     var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  //     var string = '';
  //     for(var ii=0; ii<8; ii++){
  //                 string += chars[Math.floor(Math.random() * chars.length)];
  //     }
  //     cy.log(string + '@domain.com');
  //     // cy.get('#email').type('test@gmail.com')
  //     //get ile dom elemntlerini seçtik sonrasında da type ı ona bağladık ve yazdırdık
  //     cy.visit("http://localhost:3000/login")
  //     cy.get('#email').type('test@gmail.com').should("have.value","test@gmail.com")
  //     cy.get("input[name='password']").type('123456')
  //     cy.get("button").contains("Login").click()
  // })
})
