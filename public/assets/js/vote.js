const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
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

//=== CANVAS JS DOCUMENTATION =============================================

const dataPoints = [
   {label: "option-one", y: 0},
   {label: "option-two", y: 0},
   {label: "option-three", y: 0},
   {label: "option-four", y: 0}
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
