$(document).ready(function(){
  $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm +'&format=json&callback=?';
    $.ajax({
      type:'GET',
      url:url,
      async:false,
      dataType:'json',
      success:function(data){
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
        $('#output').html('');
        for(var i=1;i<data[1].length;i++){
        $('#output').prepend("<li><a href="+data[3][i]+">"+"<u>"+data[1][i]+"</u>"+"</a><p> Result :"+"["+i+"]"+"</P><p>"+data[2][i]+"</P></li>");
        }
      },
      error:function(errorMessage){
        document.getElementById("output").innerHTML='<h6 style="color:red">Error! Failed to Process</h6>'        
      }
      
    });
  });
});