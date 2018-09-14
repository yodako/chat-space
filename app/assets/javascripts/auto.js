$(function(){
  function buildHTML(message){
    var html = `
    <div class="main-messages__upper" data-message-id=${message.id}>
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
    </div>`
    return html
  }

  $(function(){
    setInterval(update, 5000);
  });

  function update(){
    var message_id = $('.main-messages__upper:last').data('message-id');
    console.log(message_id)
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        message: { id: message_id }
      },
      dataType: 'json'
    })

    .done(function(data) {
      var insertHTML = '';
      data.messages.forEach(function(message) {
        if (message.id > id ) {
          insertHTML += buildHTML(message);
        }
      });
      $('.main-messages').append(insertHTML);
      $('html,body').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'slow');
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  }
});
ß
