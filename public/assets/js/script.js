
//=== CREATE POLL ========================================
$("submitpoll").on("click", (event)=> {
   event.preventDefault();

   //=== MAKE A NEW POLL OBJECT =============================
   const newPoll = {
      user: $("#user").val().trim(),
      question: $("#option").val().trim(),
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
         row.append("<p>" + newPoll.optionOne + "</p>");
         row.append("<p>" + newPoll.optionTwo + "</p>");
         row.append("<p>" + newPoll.optionThree + "</p>");
         row.append("<p>" + newPoll.optionFour + "</p>");
         $("#polldisplay").prepend(row);
      });
    
});











//=== OLD ABENDONED APPROACH ===================================
// $('button').on('click', function(){
//     displayQuestionair();
// });
// function displayQuestionair(){
//     $('#newpollform').empty();
//     const divEl = $('<div>').addClass('addpoll');
//     const questEl = $('<h3>').text('Fav bar tonight?');
//     const breakEl = $('<br>');
//     const inputElOne = $('<input>').attr('type', 'radio');
//     const labelOne = $('<label>').text('First Option');
//     const inputElTwo = $('<input>').attr('type', 'radio');
//     const labelTwo = $('<label>').text('Second Option');
//     const inputThree = $('<input>').attr('type', 'radio');
//     const labelThree = $('<label>').text('Third Option');
//     const inputFour = $('<input>').attr('type', 'radio');
//     const labelFour = $('<label>').text('Four Option');
//     divEl.append(questEl, inputElOne, labelOne, inputElTwo, labelTwo);
//     divEl.append(breakEl);
//     divEl.append(inputThree, labelThree, inputFour, labelFour);
//     $('#newpollform').append(divEl);
// }


