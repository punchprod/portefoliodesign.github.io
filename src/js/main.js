$(document).ready(function() {
     // open modal 
     $('#open_modal').click(function() {
      $('#modal_to_open').css(
        {
            'display': 'block'
        }
      );   
     });
    

     // open modal
$('#close_modal').click(function() {
  $('#modal_to_open').css(
    {
      'display': 'none'
    }
   )
  });      
});

