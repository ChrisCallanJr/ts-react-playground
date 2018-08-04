type Message = {
  body: string,
  from: string 
}

let message: Message
message.from ='Chirs'
message.body = 'Greetings'

console.log(`New message from ${message.from}: ${message.body}`)
