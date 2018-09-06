$(document).ready(function() {

  //Add Book
  $("#add").click(function(event) {
    //prevent the add button from clicking via the browser
    event.preventDefault();
      
    ajaxPost();
    ajaxGet();
  });

  function ajaxPost(){
    //Grab data from title and author input
    let bookData = {
      title : $("#title").val(),
      author : $("#author").val()
    };

    if (!(bookData.title && bookData.author)) {
      alert("You must enter an title and author!");
      return;
    }
    //POST Method
    $.ajax({
      type : "POST",
      contentType : "application/json",
      url : "/api/mybooks",
      data : JSON.stringify(bookData),
      // success : function(book) {
      //   $("#postResultDiv").html("<p>" + "Add Successful! <br>" + "--> " + book.title + " by " + book.author + "</p>");
      // },
      error : function(e) {
        alert("Error!")
        console.log("Error: ", e);
      }
    });
    //reset add book input fields after posting 
    resetData();
  }
  function resetData() {
    $("#title").val("");
    $("#author").val("");
  }

  //
  //GET Request
  $("#inv").click(function(event) {
    event.preventDefault();
    ajaxGet();
  });

  //GET method
  function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/mybooks",
			success: function(result){
				$('#getResultDiv').empty();
				let bookList = "";
				$.each(result, function(i, book){
 
          $('#getResultDiv .list-group').append(` <li class"list-group-item" data-id="${book.id}"></li> ` 
          + book.title + " by " + book.author + ` 
          <button class="btn btn-danger delete" data-id="${book.id}">Delete</button> `);
          //let deleteButton = $(`<button class="deleteBtn">`);
          
          // $('#getResultDiv .list-group').append(deleteButton);
				});
				console.log("Success: ", );
			},
			error : function(e) {
				console.log("ERROR: ", e);
			}
		});	
  }
  let handleDeleteBtn = function() {
    let idToDelete = $(this).parent().attr("data-id");
    $("#getResultDiv").on("click", handleDeleteBtn);
    ajaxDelete = { deleteBook: function (id) {
      $.ajax({
        type: 'DELETE',
        url: '/api/mybooks/'+id,
        success: function(result){
            alert('Delete');
        },
        error: function(e){
            console.log("Error: ", e);
        }
      });
    }
    }
    ajaxDelete.deleteBook(idToDelete).then(function() {
    ajaxGet(); 
    });
  };  
    
});

  //Delete by id
  // $("#deleteBtn").on("click", function(event) {
  //   console.log("clicked delete");
  //   event.preventDefault();
  //   let id = $(this).attr('id');
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/mybooks/" + id
  //   }).then(ajaxGet);
    
  // });
  


