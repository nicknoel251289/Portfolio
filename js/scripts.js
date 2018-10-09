$(document).ready(function(){

  document.getElementById('view_button').addEventListener('click', function(){
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('cartoon_computer').style.width = "0px";
    document.getElementById('right-tab').style.visibility = "visible";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "block";
    document.getElementById('right-tab').style.display = "inline-flex";
  });

  document.getElementById('work_button').addEventListener('click', function(){
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('code_computer').style.margin = "0px";
    document.getElementById('left-tab').style.visibility = "visible";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_3').style.display = "block";
    document.getElementById('left-tab').style.display = "inline-flex";
  });

  document.getElementById('left-tab').addEventListener('click', function(){
    document.getElementById('left-tab').style.display = "none";
    document.getElementById('right-tab').style.display = "inline-flex";
    document.getElementById('right-tab').style.zIndex = "0";
    document.getElementById('left-tab').style.zIndex = "300";
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "block";
    document.getElementById('section_3').style.display = "none";
  });

  $("#left-tab").hover(function(){
    $("#left-tab-div").css("visibility", "visible");
    }, function(){
    $("#left-tab-div").css("visibility", "hidden");
  });

  document.getElementById('right-tab').addEventListener('click', function(){
    document.getElementById('right-tab').style.display = "none";
    document.getElementById('left-tab').style.display = "inline-flex";
    document.getElementById('left-tab').style.zIndex = "0";
    document.getElementById('right-tab').style.zIndex = "300";
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "none";
    document.getElementById('section_3').style.display = "block";
  });

  $("#right-tab").hover(function(){
    $("#right-tab-div").css("visibility", "visible");
    }, function(){
    $("#right-tab-div").css("visibility", "hidden");
  });

  $("#artwork_auto_scroll").on('click', function(event) {
    // Makes sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $("#case_studies_auto_scroll").on('click', function(event) {
    // Makes sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  /* var charcoal_list = document.getElementsByClassName("charcoal");
  document.getElementById("charcoal_filter").addEventListener("click", function(){
    var first = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.opacity = "0";
      }
        setTimeout(second, 500);
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.visibility = "visible";
        }
        setTimeout(second, 500);
      }
    };

    var second = function(){
      if(document.getElementById("charcoal_filter").checked == true){
        for(var i = 0; i < charcoal_list.length; i++){
        charcoal_list[i].style.visibility = "hidden";
      }
      }else if(document.getElementById("charcoal_filter").checked == false){
        for(var j = 0; j < charcoal_list.length; j++){
          charcoal_list[j].style.opacity = "1";
        }
      }
      //document.getElementById("charcoal").style.display = "none";
    };

    first();

  }); */

    document.getElementById("add_to_list").onclick = function(){
      var list = document.getElementById("list");
      var create_list_item = document.createElement("li");
      var new_list_item = create_list_item;
      new_list_item.innerHTML = "List Item";
      list.appendChild(new_list_item);
      setTimeout(function(){
        new_list_item.className = new_list_item.className + " show";
      }, 100);
    }

    $('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.card').not('.charcoal').animate({width: 'hide'}, 600);
      }else if(document.getElementById("charcoal_filter").checked == false){
        $('.card').not('.charcoal').animate({width: 'show'}, 600, 'linear');
      }
    });

    /* $('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.charcoal').animate({width: 'toggle'});
        $('.charcoal img').animate({width: 'toggle'});
        $('.art').css('justify-content', 'flex-start');
      }else if(document.getElementById("charcoal_filter").checked == false){
        $('.art').css('justify-content', 'space-between');
        $('.charcoal').slideToggle({visibility: 'visible'});
        $('.charcoal img').animate({width: 'toggle'});
      }
    }); */

    /*$('#charcoal_filter').on('click','div.charcoal', function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $(this).css({"visibility":"hidden",display:'block'}).slideUp();
      }
    });*/

});
