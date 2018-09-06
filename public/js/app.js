$(document).ready(function() {
  // login code to app code ======================================
  login = () => {
    let testUser = [
      {
        username: "nigel",
        password: "book"
      },
      {
        username: "laura",
        password: "book"
      }
    ];

    $("#login").on("click", function(event) {
      event.preventDefault();

      let username = $("#username")
        .val()
        .trim();
      let password = $("#password")
        .val()
        .trim();

      console.log("username: " + username + " password: " + password);

      for (let i = 0; i < testUser.length; i++) {
        if (
          username == testUser[i].username &&
          password == testUser[i].password
        ) {
          $(".login-container").text("You are logged in as: " + username);
          let target = $('.login-container');

          let logOut = $(`<button class="logout">`);
          // logOut.addClass("logout");
          logOut.text("Sign Out");
          target.append(logOut);
          return;
          
        }
      }
      alert("Incorrect username or password!");
      console.log('this')
    });
  };
  
  login();
  
  // function logout ==============================================
  logout = () => {
    $('.logout').on('click', '.logout', function(event) {
      event.preventDefault();
      alert('clicked');
    });
  };
  logout();
  // ==================================================================

  // category code function and api request ===========================
  category = () => {
    $("#cat").on("click", function(event) {
      event.preventDefault();
      let apiKey = "f26f3de315bf4cf786ea02d46d9b167d";

      let urlQuery =
        "http://api.nytimes.com/svc/books/v2/lists/overview.json?rank=123?&api-key=" +
        apiKey;
      $.ajax({
        url: urlQuery,
        method: "GET"
      }).then(function(data) {
        let bookList = data.results.lists;
        // console.log(bookList);

        for (let i = 0; i < bookList.length; i++) {
          let topFive = bookList[i].books;

          for (let i = 0; i < topFive.length; i++) {
            let target = $(".category");
            let bookContainer = $('<div class="results">');

            let bookTitle = $("<p>");
            bookTitle.text(topFive[i].title);
            bookTitle.addClass("book-title");
            bookContainer.append(bookTitle);

            let bookAuthor = $("<p>");
            bookAuthor.text(topFive[i].author);
            bookAuthor.addClass("book-author");
            bookContainer.append(bookAuthor);

            let bookLink = $("<a target='_blank'>");
            bookLink.attr("href", topFive[i].amazon_product_url);
            bookLink.text("Buy on Amazon");
            bookLink.addClass("book-link");
            bookContainer.append(bookLink);
            
            // let bookPic = topFive[i].book_image;
            // let $img = $(`<img src="${drinkData[i].strDrinkThumb}" id="${drinkData[i].idDrink}" class="results-img">`)
            let bookImage = $(`<img src="${topFive[i].book_image}" id=${topFive[i].primary_isbn10}>`);
            // bookImage.attr("src", bookPic);
            bookImage.addClass("book-image");
            bookContainer.append(bookImage);

            let newButton = $("<button>");
            newButton.text("Add to Wishlist");
            newButton.addClass("wish-button");
            bookContainer.append(newButton);

            target.prepend(bookContainer);
          }

          $(".results").show();
        }
        wishList();
      });
    });
  };
  category();

// button functions between pages ====================================
  inventory = () => {
    $('#inv').on('click', function(event) {
      event.preventDefault();
      $('.results').empty();
      window.location = "./books.html";
    });
  };
  inventory();

  wish = () => {
    $('#wish').on('click', function(event) {
      event.preventDefault();
     window.location = "./wish.html";
    });
  };
  wish();

  backToHome = () => {
    $('#home').on('click', function(event) {
      event.preventDefault();
      $('.results').empty();
      window.location = "./index.html";
    });
  };
  backToHome();



  // add books from api to wishlist db =====================
  wishList = () => {
    $(".wish-button").on("click", function(event) {
      event.preventDefault();
      alert("clicked");
    });
  };
  
  // =======================================================
  // sequelize code = database stuff 
  // =======================================================
  

});




