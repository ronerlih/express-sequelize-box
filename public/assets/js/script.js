$("#submitpoll").on("click", (event) => {
   event.preventDefault();
   const newPoll = {
      user: $("#user").val().trim(),
      question: $("#question").val().trim(),
      optionOne: $("#option-one").val().trim(),
      optionTwo: $("#option-two").val().trim(),
      optionThree: $("#option-three").val().trim(),
      optionFour: $("#option-four").val().trim()
   };
   $.post("/api/new", newPoll, (data) => {
      console.table(data);
      const row = $("<div id='vote-form'>");
      row.append("<h3>" + data.user + " asked: </h3>");
      row.append("<p>" + data.question + "</p>");
      row.append("<input type='radio' name='os' value='" + data.optionOne + "'>" + data.optionOne);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionTwo + "'>" + data.optionTwo);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionThree + "'>" + data.optionThree);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionFour + "'>" + data.optionFour);
      row.append("<br><br><br>");
      row.append("<button id='vote-button'>Submit</button>");
      $("#polldisplay").prepend(row);
      $("#vote-button").on("click", () => {
         console.log("%c this is the data inside vote btn", "color:green; background-color:yellow; fonts-size:22px");
         console.log(data);
         const choice = document.querySelector("input[name=os]:checked").value;
         const pollData = {
            optionSelect: choice,
            pollId: data.id,
         };
         $.post("/api/vote", pollData, (data) => {
            // console.log("NEW CONSOLE LOG: ===========", data);
            $.get("/api/results/" + data.id, (data) => {
               console.log("SCRIPT.JS CONSOLE LOG DATA:", data);
               // renderCanvas(optionOneResults, optionTwoResults, optionThreeResults, optionFourResults,); // NEED TO GET PARAMETER VALUES WORKING
               const dataPoints = [
                  { label: "option-one", y: 1 },
                  { label: "option-two", y: 2},
                  { label: "option-three", y: 0 },
                  { label: "option-four", y: 1 }
               ];
               const chartContainer = document.querySelector("#chartContainer");
               // taking data and rendring in chart
               if (chartContainer) {
                  // ajax call to get data
                  const chart = new CanvasJS.Chart("chartContainer", {
                     animationEnabled: true,
                     theme: "theme1",
                     title: {
                        text: "Results"
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

            });
         });
      });
   });
});

//=== CANVAS JS CHART ======================================================================


// });
//=== CALLING CANVAS JS CHART AND VOTING FUNCTIONS ======================================================
// $("#cms").empty();
// $("#user").val("");
// $("#question").val("");
// $("#option-one").val("");
// $("#option-two").val("");
// $("#option-three").val("");
// $("#option-four").val("");
//=== VOTING ============================================================================================
// $(document).on("click", "#vote-form", () => {
//
//    fetch("http://localhost:3360/poll", {
//       method: "post",
//       body: JSON.stringify(data),
//       headers: new Headers({
//          "Content-Type": "application/json"
//       })
//    })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//    e.preventDefault();
// });
// voteChart();


