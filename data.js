$("button").click(function(){
  $.getJSON("https://sblakeUNA.github.io/filehost/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
