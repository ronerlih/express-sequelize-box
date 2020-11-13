//=== CREATE POLL ========================================
$("#submitpoll").on("click", (event)=> {
   event.preventDefault();

   //=== MAKE A NEW POLL OBJECT =============================
   const newPoll = {
      user: $("#user").val().trim(),
      question: $("#question").val().trim(),
      optionOne: $("#option-one").val().trim(),
      optionTwo: $("#option-two").val().trim(),
      optionThree: $("#option-three").val().trim(),
      optionFour: $("#option-four").val().trim()
   };
   console.log(newPoll);

   $.post("/api/new", newPoll)
      .then(() => {
         const row = $("<div>");
         row.append("<p>" + newPoll.user + "asked: </p>");
         row.append("<p>" + newPoll.question + "</p>");
         row.append("<input type='radio'>" + newPoll.optionOne);
         row.append("<input type='radio'>" + newPoll.optionTwo);
         row.append("<input type='radio'>" + newPoll.optionThree);
         row.append("<input type='radio'>" + newPoll.optionFour);
         $("#polldisplay").prepend(row);
      });
   $("#user").val("");
   $("#question").val("");
   $("#option-one").val("");
   $("#option-two").val("");
   $("#option-three").val("");
   $("#option-four").val("");
});












