// slider
$(document).ready(function () {
  $(".right").on("click", function () {
    var currentImage = $(".active");
    var nextImage = currentImage.next();
    if (nextImage.length) {
      currentImage.removeClass("active");
      nextImage.addClass("active");
    } else {
      $(".image:last-child").removeClass("active");
      $(".image:first-child").addClass("active");
    }
  });
  $(".left").on("click", function () {
    var currentImage = $(".active");
    var prevImage = currentImage.prev();
    if (prevImage.length) {
      currentImage.removeClass("active");
      prevImage.addClass("active");
    } else {
      $(".image:first-child").removeClass("active");
      $(".image:last-child").addClass("active");
    }
  });
});
setInterval(function () {
  var currentImage = $(".active");
  var nextImage = currentImage.next();
  if (nextImage.length) {
    currentImage.removeClass("active");
    nextImage.addClass("active");
  } else {
    $(".image:last-child").removeClass("active");
    $(".image:first-child").addClass("active");
  }
}, 3000);
// slider end
// youtube thumbnail start
$(document).ready(function () {
  $(".main-wrapper .iframe-video").on("click", function () {
    // get required DOM elements
    var iframe_src = $(this).children("iframe").attr("src");
    iframe = $(".video-popup");
    iframe_video = $(".video-popup iframe");
    close_btn = $(".close-btn");
    // change the video source with clicked one
    $(iframe_video).attr("src", iframe_src);
    $(iframe).fadeIn().addClass("show-video");
    // remove the video overlay when clicking outsisw the video
    $(document).on("click", function (e) {
      if (iframe.is(e.target) || $(close_btn).is(e.target)) {
        $(iframe).removeClass("show-video").css({ display: "none" });
        $(iframe_video).attr("src", "");
      }
    });
  });
});
// youtube thumbnail end
// form validation
$(function () {
  $("#fname_error_message").hide();
  $("#sname_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();
  var error_fname = true;
  var error_sname = true;
  var error_email = true;
  var error_password = true;
  var error_retype_password = true;
  $("#form_fname").focusout(function () {
    check_fname();
  });
  $("#form_sname").focusout(function () {
    check_sname();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });
  function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#form_fname").val();
    if (pattern.test(fname) && fname !== "") {
      $("#fname_error_message").hide();
      $("#form_fname").css("border-bottom", "2px solid #34F458");
    } else {
      $("#fname_error_message")
        .html("Should Contain Only Characters")
        .css("color", "red");
      $("#fname_error_message").show();
      $("#form_fname").css("border-bottom", "2px solid #F90A0A");
      error_fname = false;
    }
  }
  function check_sname() {
    var pattern = /^[a-zA-Z]*$/;
    var sname = $("#form_sname").val();
    if (pattern.test(sname) && sname !== "") {
      $("#sname_error_message").hide();
      $("#form_sname").css("border-bottom", "2px solid #34F458");
    } else {
      $("#sname_error_message")
        .html("Should Contain Only Characters")
        .css("color", "red");
      $("#sname_error_message").show();
      $("#form_sname").css("border-bottom", "2px solid #F90A0A");
      error_sname = false;
    }
  }
  function check_password() {
    var password_length = $("#form_password").val().length;
    if (password_length < 8) {
      $("#password_error_message")
        .html("Atleast 8 Characters Required")
        .css("color", "red");
      $("#password_error_message").show();
      $("$form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = false;
    } else {
      $("#password_error_message").hide();
      $("#form_password").css("border-bottom", "2px solid #34F458");
    }
  }
  function check_retype_password() {
    var password = $("#form_password").val();
    var retype_password = $("#form_retype_password").val();
    if (password !== retype_password) {
      $("#retype_password_error_message")
        .html("Password Did Not Matched")
        .css("color", "red");
      $("#retype_password_error_message").show();
      $("$form_retype_password").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = false;
    } else {
      $("#retype_password_error_message").hide();
      $("#form_retype_password").css("border-bottom", "2px solid #34F458");
    }
  }
  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#email_error_message").html("Invalid Email Id").css("color", "red");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      $("#email_id").css("top", "-20px");
      error_email = false;
    }
  }
  $("#registration_form").submit(function () {
    error_fname = true;
    error_sname = true;
    error_email = true;
    error_password = true;
    error_retype_password = true;
    check_fname();
    check_sname();
    check_email();
    check_password();
    check_retype_password();
    if (
      error_fname === true &&
      error_sname === true &&
      error_email === true &&
      error_password === true &&
      error_retype_password === true
    ) {
      alert("Registration Successfull");
      return true;
    } else {
      alert("Please Fill the Form Correctly");
      return false;
    }
  });
});
// Autopopulate form values when the user reopens the browser
$(function () {
  function storeData() {
    var fname = $("#form_fname").val();
    var sname = $("#form_sname").val();
    var email = $("#form_email").val();
    document.cookie = "fname=" + fname + "; max-age=" + 2 * 24 * 60 * 60;
    document.cookie = "sname=" + sname + "; max-age=" + 2 * 24 * 60 * 60;
    document.cookie = "email=" + email + "; max-age=" + 2 * 24 * 60 * 60;
  }
  $(function () {
    var fname = getCookie("fname");
    var sname = getCookie("sname");
    var email = getCookie("email");
    if (fname != "") {
      $("#form_fname").val(fname);
    }
    if (sname != "") {
      $("#form_sname").val(sname);
    }
    if (email != "") {
      $("#form_email").val(email);
    }
  });
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  $("form").on("submit", function () {
    storeData();
  });
});
// scroll up button hide js
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".gotopbtn").fadeIn();
    } else {
      $(".gotopbtn").fadeOut();
    }
  });
  $(".gotopbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
