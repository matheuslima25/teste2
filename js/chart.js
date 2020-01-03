$(document).ready(function () {
    $("#categoria").change(function () {
  
      var el = $(this);
  
      if (el.val() === "Cama e Banho") {
            chartGraph.data.datasets[0].data = [200, 700, 300, 90, 150];
            chartGraph.update();  
      }
      else if (el.val() === "Vestuário") {
            chartGraph.data.datasets[0].data = [100, 500, 600, 100, 200];
            chartGraph.update();  
      }    
        
    });
});   