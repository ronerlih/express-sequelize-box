//=== CREATE POLL DIV ON CLICK ================================================================================
$("#submitpoll").on("click", (event)=> {
   event.preventDefault();

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
         const row = $("<div id='vote-form'>");
         row.append("<p>" + newPoll.user + " asked: </p>");
         row.append("<p>" + newPoll.question + "</p>");
         row.append("<input type='radio' name='os'>" + newPoll.optionOne);
         row.append("<input type='radio' name='os'>" + newPoll.optionTwo);
         row.append("<input type='radio' name='os'>" + newPoll.optionThree);
         row.append("<input type='radio' name='os'>" + newPoll.optionFour);
         row.append("<br>");
         row.append("<button id='vote-button'>" + "Submit" + "</button>");
         $("#polldisplay").prepend(row);
      });

   //=== CALLING CANVAS JS CHART AND VOTING FUNCTIONS ======================================================
   collectVotes();
   renderCanvas();
   $("#cms").empty();
   


   $("#user").val("");
   $("#question").val("");
   $("#option-one").val("");
   $("#option-two").val("");
   $("#option-three").val("");
   $("#option-four").val("");
});

//=== VOTING ============================================================================================
function collectVotes(){
   const form = document.querySelector("button");

   form.addEventListener("click", (e) => {
      const choice = document.querySelector("input[name=os]:checked").value;
      const data = { os: choice };

      fetch("http://localhost:3000/poll", {
         method: "post",
         body: JSON.stringify(data),
         headers: new Headers({
            "Content-Type": "application/json"
         })
      })
         .then(res => res.json())
         .then(data => console.log(data))
         .catch(err => console.log(err));
      e.preventDefault();
   });
}

//=== CANVAS JS CHART ======================================================================
function renderCanvas(){
   const dataPoints = [
      {label: "option-one", y: 3},
      {label: "option-two", y: 1},
      {label: "option-three", y: 2},
      {label: "option-four", y: 2}
   ];
   
   const chartContainer = document.querySelector("#chartContainer");
   // taking data and rendring in chart
   if(chartContainer){
   
      // ajax call to get data
       
      const chart = new CanvasJS.Chart("chartContainer", {
         animationEnabled: true,
         theme: "theme1",
         title: {
            text: "Bar Results"
         },
         data: [
            {
               type: "column",
               dataPoints: dataPoints
            }
         ]
      });
      chart.render();
   }
}









