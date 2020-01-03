$(document).ready(function () {

  $("#categoria").change(function () {

    var el = $(this);

    if (el.val() === "Cama e Banho") {
      $('#produtos').empty()
      $("#marca option:last-child").remove();
      $("#produtos").append("<option>Toalha</option>");
      $("#produtos").append("<option>Pano de Prato</option>");
      $("#produtos").append("<option>Lençol</option>");
      $("#marca").append("<option>Trussardi</option>");
    }
    else if (el.val() === "Vestuário") {
      $('#produtos').empty()
      $("#marca option:last-child").remove();
      $("#produtos").append("<option>Calça</option>");
      $("#produtos").append("<option>Boné</option>");
      $("#produtos").append("<option>Bolsa</option>");
      $("#marca").append("<option>Calvin Clein</option>");

    }      
  });

  $("#produtos").change(function () {

    var el = $(this);

    if (el.val() === "Boné") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Coca-Cola</option>");
    }
    else if (el.val() === "Bolsa") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Louis Vuitton</option>");
    }
    else if (el.val() === "Calça") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Calvin Clein</option>");
    }
    else if (el.val() === "Toalha") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Trussardi</option>");
    }
    else if (el.val() === "Pano de Prato") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Teka</option>");
    }
    else if (el.val() === "Lençol") {
      $("#marca option:last-child").remove();
      $("#marca").append("<option>Altenburg</option>");
    }

  });

});