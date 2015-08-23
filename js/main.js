$( document ).ready(function() {
    $(function() {
    $("[autofocus]").on("focus", function() {
      if (this.setSelectionRange) {
        var len = this.value.length * 2;
        this.setSelectionRange(len, len);
      } else {
        this.value = this.value;
      }
      this.scrollTop = 999999;
    }).focus();
  });
  console.log("hellow");
  query = "http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=26056a324e4e6a894782472bedd07d94&format=JSONP&callback=?&country=us"
  $.ajax({
    url:query,
    dataType: "jsonp",
    jsonpCallback: 'callback',
    type: 'GET',
    error: function() { console.log('Uh Oh!'); },
    beforeSend: function() {
      $("#trackinput").blur();
      $(".fullinfo").empty();
      $(".waitinginfo").empty();
      $(".waitinginfo").append(
        '<br><br>'+
        '<div class="three-quarters-loader">'+
        '</div>'
      );
       // change submit button text
    },
    success:function(data) {
      var count = 1;
      console.log(data);
      $("#trackinput").val('');
      $(".waitinginfo").empty();
      $(".fullinfo").empty();
      $(".fullinfo").append('<h2>TOP CHARTS</h2>');
      $.each(data['message']['body']['track_list'],function(i,artist) {
        console.log(artist['track']['album_name']);
        if (artist['track']['album_coverart_500x500']!="") {
          imgtag=artist['track']['album_coverart_500x500']
        } else if (artist['track']['album_coverart_350x350']!=""){
          imgtag=artist['track']['album_coverart_350x350']
        }else{
          imgtag="img/noimage.png"
        }
        $(".fullinfo").append('<div class="singleitem">'+
        '<div class="row">'+
        '<div class="col-xs-6 col-md-4 eachitem wow fadeIn">'+
        '<img src="'+imgtag+'" class="img-responsive" alt="Responsive image">'+
        '</div>'+
        '<div class="col-xs-12 col-md-8 artist wow fadeIn">'+
        '<h2>#'+count+'</h2>'+
        ' <div class="artistinfo">'+
        '  <h3>'+artist['track']['track_name']+'</h3>'+
        '  <h4>'+artist['track']['album_name']+'</h4>'+
        '  </div>'+
        '  <div class="addinfo">'+
        '  <table class="table">'+
        '      <tbody>'+
        '        <tr>'+
        '          <td>Artist</td>'+
        '          <td></td>'+
        '          <td>'+artist['track']['artist_name']+'</td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td>Lyrics</td>'+
        '          <td></td>'+
        '          <td><a href="'+artist['track']['track_share_url']+'">Click Here</a></td>'+
        '        </tr>'+
        '      </tbody>'+
        '    </table>'+
        '  </div>'+
        '</div>'+
        '  </div>'+
        '  </div>'+
        '<br><br>'+
        '  </div>'


      )
      count=count+1;
    });
    $(function() {
      $("[autofocus]").on("focus", function() {
        if (this.setSelectionRange) {
          var len = this.value.length * 2;
          this.setSelectionRange(len, len);
        } else {
          this.value = this.value;
        }
        this.scrollTop = 999999;
      }).focus();
    });

    }

  });

















  $("#searchform").on('submit',function(e) {
    e.preventDefault();
    search=$(this).find("#trackinput").val().replace(/ /g, "%20");
    query = "http://api.musixmatch.com/ws/1.1/track.search?apikey=26056a324e4e6a894782472bedd07d94&format=JSONP&callback=?&q_track="+search;
    console.log(query);
      $.ajax({
        url:query,
        dataType: "jsonp",
        jsonpCallback: 'callback',
        type: 'GET',
        error: function() { console.log('Uh Oh!'); },
        beforeSend: function() {
          $("#trackinput").blur();
          $(".fullinfo").empty();
          $(".waitinginfo").empty();
          $(".waitinginfo").append(
            '<br><br>'+
            '<div class="three-quarters-loader">'+
            '</div>'
          );
           // change submit button text
        },
        success:function(data) {
          console.log(data);
          $("#trackinput").val('');
          $(".waitinginfo").empty();
          $(".fullinfo").empty();
          $.each(data['message']['body']['track_list'],function(i,artist) {
            console.log(artist['track']['album_name']);
            if (artist['track']['album_coverart_500x500']!="") {
              imgtag=artist['track']['album_coverart_500x500']
            } else if (artist['track']['album_coverart_350x350']!=""){
              imgtag=artist['track']['album_coverart_350x350']
            }else{
              imgtag="img/noimage.png"
            }
            $(".fullinfo").append('<div class="singleitem">'+
            '<div class="row">'+
            '<div class="col-xs-6 col-md-4 eachitem wow fadeIn">'+
            '<img src="'+imgtag+'" class="img-responsive" alt="Responsive image">'+
            '</div>'+
            '<div class="col-xs-12 col-md-8 artist wow fadeIn">'+
            ' <div class="artistinfo">'+
            '  <h3>'+artist['track']['track_name']+'</h3>'+
            '  <h4>'+artist['track']['album_name']+'</h4>'+
            '  </div>'+
            '  <div class="addinfo">'+
            '  <table class="table">'+
            '      <tbody>'+
            '        <tr>'+
            '          <td>Artist</td>'+
            '          <td></td>'+
            '          <td>'+artist['track']['artist_name']+'</td>'+
            '        </tr>'+
            '        <tr>'+
            '          <td>Lyrics</td>'+
            '          <td></td>'+
            '          <td><a href="'+artist['track']['track_share_url']+'">Click Here</a></td>'+
            '        </tr>'+
            '      </tbody>'+
            '    </table>'+
            '  </div>'+
            '</div>'+
            '  </div>'+
            '  </div>'+
            '<br><br>'+
            '  </div>'


          )

          })
        }

      });
  });
// secondform
$("#topform").on('submit',function(e) {
  e.preventDefault();
  search=$(this).find("#topforminput").val().replace(/ /g, "%20");
  query = "http://api.musixmatch.com/ws/1.1/track.search?apikey=26056a324e4e6a894782472bedd07d94&format=JSONP&callback=?&q_track="+search;
  console.log(query);
    $.ajax({
      url:query,
      dataType: "jsonp",
      jsonpCallback: 'callback',
      type: 'GET',
      error: function() { console.log('Uh Oh!'); },
      beforeSend: function() {
        $('html, body').animate({
          scrollTop: $(".fullinfo").offset().top
        }, 1000);
        $("#trackinput").blur();
        $(".fullinfo").empty();
        $(".waitinginfo").empty();
        $(".waitinginfo").append(
          '<br><br>'+
          '<div class="three-quarters-loader">'+
          '</div>'
        );
         // change submit button text
      },
      success:function(data) {
        console.log(data);
        $("#trackinput").val('');
        $(".waitinginfo").empty();
        $(".fullinfo").empty();
        $.each(data['message']['body']['track_list'],function(i,artist) {
          console.log(artist['track']['album_name']);
          if (artist['track']['album_coverart_500x500']!="") {
            imgtag=artist['track']['album_coverart_500x500']
          } else if (artist['track']['album_coverart_350x350']!=""){
            imgtag=artist['track']['album_coverart_350x350']
          }else{
            imgtag="img/noimage.png"
          }
          $(".fullinfo").append('<div class="singleitem">'+
          '<div class="row">'+
          '<div class="col-xs-6 col-md-4 eachitem wow fadeIn">'+
          '<img src="'+imgtag+'" class="img-responsive" alt="Responsive image">'+
          '</div>'+
          '<div class="col-xs-12 col-md-8 artist wow fadeIn">'+
          ' <div class="artistinfo">'+
          '  <h3>'+artist['track']['track_name']+'</h3>'+
          '  <h4>'+artist['track']['album_name']+'</h4>'+
          '  </div>'+
          '  <div class="addinfo">'+
          '  <table class="table">'+
          '      <tbody>'+
          '        <tr>'+
          '          <td>Artist</td>'+
          '          <td></td>'+
          '          <td>'+artist['track']['artist_name']+'</td>'+
          '        </tr>'+
          '        <tr>'+
          '          <td>Lyrics</td>'+
          '          <td></td>'+
          '          <td><a href="'+artist['track']['track_share_url']+'">Click Here</a></td>'+
          '        </tr>'+
          '      </tbody>'+
          '    </table>'+
          '  </div>'+
          '</div>'+
          '  </div>'+
          '  </div>'+
          '<br><br>'+
          '  </div>'


        )

        })
      }

    });
});



});
