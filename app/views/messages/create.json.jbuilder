json.content @message.content
json.image @message.image
json.name @message.user.name
json.id @message.id
json.created_at @message.created_at.to_formatted_s(:datetime)
