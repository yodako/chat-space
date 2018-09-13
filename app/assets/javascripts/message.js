$(function(){
  function buildHTML(message){
    var html = `
    <div class="main-messages__upper">
      <div class="main-messages__upper--name">
        ${message.name}
      </div>
      <div class="main-messages__upper--date">
        ${message.created_at}
      </div>
    </div>
    <div class="main-messages__lower">
      <div class="main-messages__lower--meesage">
          ${message.content}
      </div>
      `
    return html;
  }

  $('#new_message').on('submit', function(e){
    // if($('.main-form__box--text').val() == '') {
    //   alert('メッセージを入れて！');
    //   return false;
    // }
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-messages').append(html);
      if (data.image.url != null){
        $('.main-messages').append(`<img src = '${data.image.url}' width="200">`)
      }
      $('#new_message').val('');
      $("#new_message")[0].reset();
      $('html,body').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'slow');
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
})
