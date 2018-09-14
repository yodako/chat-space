json.messages @messages.each do |message|
  json.content @message.content
  json.image @message.image
  json.name @message.user.name
  json.id @message.id
  json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M')
end
