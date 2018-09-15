json.content @message.content
json.image @message.image
json.name @message.user.name
json.id @message.id
json.created_at simple_time(@message.created_at)
