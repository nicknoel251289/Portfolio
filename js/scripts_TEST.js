$(document).ready(function(){

  document.getElementById('view_button').addEventListener('click', function(){
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('cartoon_computer').style.margin = "0 auto";
    document.getElementById('right-tab').style.visibility = "visible";
    document.getElementById('right-tab-div').style.visibility = "visible";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "grid";
    document.getElementById('section_4').style.display = "block";
    document.getElementById('right-tab').style.display = "inline-flex";

    if($(window).width() <= 813){
      document.getElementById('cartoon_computer').style.width = "70%";
      if($(window).width() <= 813 && $(window).height() <= 375){
        document.getElementById('cartoon_computer').style.width = "40%";
        document.getElementById('cartoon_computer').style.top = "-30px";
      }
    }else if($(window).width() <= 370){
      document.getElementById('cartoon_computer').style.width = "140%";
    }else{
      document.getElementById('cartoon_computer').style.width = "700px";
    }

    if($(window).height() <= 375){
      document.getElementById('cartoon_computer').style.width = "40%";
      document.getElementById('cartoon_computer').style.top = "-30px";
    }else{

    }

    resizeFamImageWidth();
    resizeFamImageHeight();

  });

  var resizeFamImageWidth = function(){
    $(window).resize(function(){
      if($(window).width() <= 813){
        document.getElementById('cartoon_computer').style.width = "70%";
      }else if($(window).width() > 813){
        document.getElementById('cartoon_computer').style.width = "700px";
      }
    });
  };

  var resizeFamImageHeight = function(){
    $(window).resize(function(){
      if($(window).height() <= 375){
        document.getElementById('cartoon_computer').style.width = "40%";
        document.getElementById('cartoon_computer').style.top = "-30px";
      }else if($(window).height() > 375 && $(window).width() > 736){
        document.getElementById('cartoon_computer').style.width = "700px";
      }else if($(window).height() > 375 && $(window).width() <= 736){
        document.getElementById('cartoon_computer').style.width = "70%";
      }
    });
  };

  document.getElementById('work_button').addEventListener('click', function(){
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('code_computer').style.margin = "0 auto";
    document.getElementById('left-tab').style.zIndex = "1000";
    document.getElementById('left-tab').style.visibility = "visible";
    document.getElementById('left-tab-div').style.visibility = "visible";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_3').style.display = "block";
    document.getElementById('section_5').style.display = "block";
    document.getElementById('left-tab').style.display = "inline-flex";


    if($(window).width() <= 813){
      document.getElementById('code_computer').style.width = "70%";
      if($(window).width() <= 813 && $(window).height() <= 375){
        document.getElementById('code_computer').style.width = "40%";
        document.getElementById('code_computer').style.top = "-30px";
      }
    }else if($(window).width() <= 370){
      document.getElementById('code_computer').style.width = "140%";
    }else{
      document.getElementById('code_computer').style.width = "700px";
    }

    if($(window).height() <= 375){
      document.getElementById('code_computer').style.width = "40%";
      document.getElementById('code_computer').style.top = "-30px";
    }else{

    }

    resizeCodeImageAfterClick();
    resizeCodeImageHeight();

  });

  var resizeCodeImageAfterClick = function(){
    $(window).resize(function(){
      if($(window).width() <= 813){
        document.getElementById('code_computer').style.width = "70%";
      }else if($(window).width() > 813){
        document.getElementById('code_computer').style.width = "700px";
      }
    });
  };

  var resizeCodeImageHeight = function(){
    $(window).resize(function(){
      if($(window).height() <= 375){
        document.getElementById('code_computer').style.width = "40%";
        document.getElementById('code_computer').style.top = "-30px";
      }else if($(window).height() > 375 && $(window).width() > 736){
        document.getElementById('code_computer').style.width = "700px";
      }else if($(window).height() > 375 && $(window).width() <= 736){
        document.getElementById('code_computer').style.width = "70%";
      }
    });
  };

  document.getElementById('left-tab').addEventListener('click', function(){
    document.getElementById('left-tab').style.display = "none";
    document.getElementById('right-tab').style.visibility = "visible";
    document.getElementById('right-tab-div').style.visibility = "visible";
    document.getElementById('right-tab').style.display = "inline-flex";
    document.getElementById('right-tab').style.zIndex = "0";
    document.getElementById('right-tab').style.zIndex = "1000";
    document.getElementById('left_block').style.width = "100%";
    document.getElementById('right_block').style.width = "0%";
    document.getElementById('cartoon_computer').style.margin = "0 auto";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "grid";
    document.getElementById('section_4').style.display = "block";
    document.getElementById('section_3').style.display = "none";
    document.getElementById('section_5').style.display = "none";

    if($(window).width() <= 813){
      document.getElementById('cartoon_computer').style.width = "70%";
    }else{
      document.getElementById('cartoon_computer').style.width = "700px";
    }
    if($(window).height() <= 375){
      document.getElementById('cartoon_computer').style.width = "40%";
      document.getElementById('cartoon_computer').style.top = "-30px";
    }else{
      console.log("taller than 414px");
    }

    resizeFamImageWidth();
    resizeFamImageHeight();

  });

  document.getElementById('right-tab').addEventListener('click', function(){

    document.getElementById('right-tab').style.display = "none";
    document.getElementById('left-tab').style.visibility = "visible";
    document.getElementById('left-tab-div').style.visibility = "visible";
    document.getElementById('left-tab').style.display = "inline-flex";
    document.getElementById('left-tab').style.zIndex = "0";
    document.getElementById('left-tab').style.zIndex = "1000";
    document.getElementById('right_block').style.width = "100%";
    document.getElementById('left_block').style.width = "0%";
    document.getElementById('code_computer').style.margin = "0 auto";
    document.getElementById('work_button').style.display = "none";
    document.getElementById('view_button').style.display = "none";
    document.getElementById('artwork_auto_scroll').style.display = "none";
    document.getElementById('case_studies_auto_scroll').style.display = "block";
    document.getElementById('section_2').style.display = "none";
    document.getElementById('section_4').style.display = "none";
    document.getElementById('section_3').style.display = "block";
    document.getElementById('section_5').style.display = "block";

    if($(window).width() <= 813){
      document.getElementById('code_computer').style.width = "70%";
    }else{
      document.getElementById('code_computer').style.width = "700px";
    }
    if($(window).height() <= 375){
      document.getElementById('code_computer').style.width = "40%";
      document.getElementById('code_computer').style.top = "-30px";
    }else{
    }

    resizeCodeImageAfterClick();
    resizeCodeImageHeight();

  });

  //var projects = document.querySelectorAll('projects');
  /*var projects = document.getElementsByClassName('projects');
  var projectArray = Array.from(projects);
  console.log(projectArray);

  var caseStudyHover = function(project){
    this.project = project;
    this.addEventListener('mouseover', function(){
      this.project.style.opacity = "0";
      this.project.style.marginBottom = "-130px";
      this.project.style.transform = "scale(1.05)"
    })
  }

  document.getElementById('project-1').addEventListener('mouseover', function(){
    document.getElementById('purple-1').style.opacity = "0";
    document.getElementById('project-1-info-container').style.marginBottom = "-130px";
    document.getElementById('project-1-bg-image').style.transform = "scale(1.05)"
  });
  document.getElementById('project-1').addEventListener('mouseleave', function(){
    document.getElementById('purple-1').style.opacity = "1";
    document.getElementById('project-1-info-container').style.marginBottom = "0px";
    document.getElementById('project-1-bg-image').style.transform = "scale(1)"
  });

  document.getElementById('project-2').addEventListener('mouseover', function(){
    document.getElementById('purple-2').style.opacity = "0";
    document.getElementById('project-2-info-container').style.marginBottom = "-130px";
    document.getElementById('project-2-bg-image').style.transform = "scale(1.05)"
  });
  document.getElementById('project-2').addEventListener('mouseleave', function(){
    document.getElementById('purple-2').style.opacity = "1";
    document.getElementById('project-2-info-container').style.marginBottom = "0px";
    document.getElementById('project-2-bg-image').style.transform = "scale(1)"
  });

  document.getElementById('project-3').addEventListener('mouseover', function(){
    document.getElementById('purple-3').style.opacity = "0";
    document.getElementById('project-3-info-container').style.marginBottom = "-130px";
    document.getElementById('project-3-bg-image').style.transform = "scale(1.05)"
  });
  document.getElementById('project-3').addEventListener('mouseleave', function(){
    document.getElementById('purple-3').style.opacity = "1";
    document.getElementById('project-3-info-container').style.marginBottom = "0px";
    document.getElementById('project-3-bg-image').style.transform = "scale(1)"
  });

  document.getElementById('project-4').addEventListener('mouseover', function(){
    document.getElementById('purple-4').style.opacity = "0";
    document.getElementById('project-4-info-container').style.marginBottom = "-130px";
    document.getElementById('project-4-bg-image').style.transform = "scale(1.05)"
  });
  document.getElementById('project-4').addEventListener('mouseleave', function(){
    document.getElementById('purple-4').style.opacity = "1";
    document.getElementById('project-4-info-container').style.marginBottom = "0px";
    document.getElementById('project-4-bg-image').style.transform = "scale(1)"
  });*/


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

  $("#artwork_auto_scroll_2").on('click', function(event) {
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


  var progressBarStatus = function(){

    var screenHeight = $(document).innerHeight();
    var currentPositionIs = $(document).scrollTop();
    var myPercentageIs = (currentPositionIs + screenHeight) / screenHeight;
    console.log(myPercentageIs);

    requestAnimationFrame(progressBarStatus);
  };

  progressBarStatus();

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

    /*$('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.card').not('.charcoal').animate({width: 'hide'}, 600);
      }else if(document.getElementById("charcoal_filter").checked == false){
        $('.card').not('.charcoal').animate({width: 'show'}, 600, 'linear');
      }
    });*/

    /* BEST ONE SO FAR
    $('#charcoal_filter').click(function(e) {
      if(document.getElementById("charcoal_filter").checked == true){
        $('.charcoal').animate({width: 'show'}, 600);
        if ($("input:checkbox:not(:checked)")){
          $('.card').not(".charcoal").animate({width: 'hide'}, 600);
        }
      } else if(document.getElementById("charcoal_filter").checked == false){
        $('.charcoal').animate({width: 'hide'}, 600);
      }
    });*/

 //for filters
    var filter = document.getElementsByClassName('filter_button');
    $("#charcoal_button").click(function(){
        if($("#charcoal_button").hasClass('clicked')){
          $("#charcoal_button").removeClass('clicked');
          $("#charcoal").removeClass('show');
          $(".charcoal").animate({width: 'hide'}, 600);
        }else if(!$("#charcoal_button").hasClass('clicked')){
          $("#charcoal_button").addClass('clicked');
          $(".charcoal").addClass('show');
          $(".charcoal").animate({width: 'show'}, 600);
        }
        for(var i=0; i<filter.length; i++){
          if(!$(filter[i]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#pencil_button").click(function(){
        if($("#pencil_button").hasClass('clicked')){
          $("#pencil_button").removeClass('clicked');
          $(".pencil").removeClass('show');
          $(".pencil").animate({width: 'hide'}, 600);
        }else if(!$("pencil_button").hasClass('clicked')){
          $("#pencil_button").addClass('clicked');
          $(".pencil").addClass('show');
          $(".pencil").animate({width: 'show'}, 600);
        }
        for(var j=0; j<filter.length; j++){
          if(!$(filter[j]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#logo_button").click(function(){
        if($("#logo_button").hasClass('clicked')){
          $("#logo_button").removeClass('clicked');
          $(".logo").removeClass('show');
          $(".logo").animate({width: 'hide'}, 600);
        }else if(!$("logo_button").hasClass('clicked')){
          $("#logo_button").addClass('clicked');
          $(".logo").addClass('show');
          $(".logo").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#mockup_button").click(function(){
        if($("#mockup_button").hasClass('clicked')){
          $("#mockup_button").removeClass('clicked');
          $(".mockup").removeClass('show');
          $(".mockup").animate({width: 'hide'}, 600);
        }else if(!$("mockup_button").hasClass('clicked')){
          $("#mockup_button").addClass('clicked');
          $(".mockup").addClass('show');
          $(".mockup").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#graphic_button").click(function(){
        if($("#graphic_button").hasClass('clicked')){
          $("#graphic_button").removeClass('clicked');
          $(".graphic").removeClass('show');
          $(".graphic").animate({width: 'hide'}, 600);
        }else if(!$("graphic_button").hasClass('clicked')){
          $("#graphic_button").addClass('clicked');
          $(".graphic").addClass('show');
          $(".graphic").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });

    $("#misc_button").click(function(){
        if($("#misc_button").hasClass('clicked')){
          $("#misc_button").removeClass('clicked');
          $(".misc").removeClass('show');
          $(".misc").animate({width: 'hide'}, 600);
        }else if(!$("misc_button").hasClass('clicked')){
          $("#misc_button").addClass('clicked');
          $(".misc").addClass('show');
          $(".misc").animate({width: 'show'}, 600);
        }
        for(var k=0; k<filter.length; k++){
          if(!$(filter[k]).hasClass('clicked')){
            $(".card").not(".show").animate({width: 'hide'}, 600);
          }
        }
    });


});
