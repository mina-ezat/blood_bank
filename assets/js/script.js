 $('.single-item').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
        arrows: false,
      adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 3000
    });
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3, 
       nextArrow: '.next',
      prevArrow: '.prev',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $(document).ready(function(){
      $(".selsct-blood-type").on("change",function(){
       $(".blood-type").val($(".selsct-blood-type").val());
      })
      $(".selsct-your-city").on("change",function(){
        $(".your-city").val($(".selsct-your-city").val());
       })
    })
    $(document).ready(function(){
      $(".ul-style li").on("click",function(){
        $(".ul-style li").removeClass("activ");
        $(this).addClass("activ");
      })
    $(".articls .card .icon-heart").on("click",function(){
      $(this).toggleClass("activ");
    })
    $(function () {
      $('#datetimepicker1').datetimepicker();
  });
  $('html').niceScroll();
    })
    // jeson  donation
    $(document).ready(function(){
      var html = '';
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET','https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/donation-requests?api_token=W4mx3VMIWetLcvEcyF554CfxjZHwdtQldbdlCl2XAaBTDIpNjKO1f7CHuwKl');
      xhttp.onreadystatechange = function(){
        var text = JSON.parse(this.responseText);
        if(xhttp.readyState ==4 && xhttp.status ==200){
          var datas =text.data.data;
          for(var i =0 ; i <= datas.length; i++){
        html +=` <div class="media-style col   col-12">
        <div style="direction: rtl" class=" media">
            <div class="media-blood-type align-self-center mr-3">
             `+datas[i].blood_type.name +`
            </div>

            <div class="media-body">
              <span>اسم الحالة: &#160; </span><span>`+ datas[i].client.name +`</span>
              <br>
              <span>مستشفي :&#160; &#160;</span><span> `+datas[i].hospital_name +`</span>
              <br>
              <span>المدينة : &#160; &#160;</span><span> `+datas[i].hospital_address +`</span>
              <span class="button-blood float-right">
                <button class="align-self-center bu-style"><a href="one-donation.html">التفصيل</a></button>
              </span>
            </div>
          </div>

    </div>`
$(".blood-donation .body-donation").html(html)
$(".blood-donation .body-donation-page").html(html)
          var datas =text.data.data;
          console.log(text);
  }
        }
      }
      xhttp.send()
    })

        
