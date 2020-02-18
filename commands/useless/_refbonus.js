/*CMD
  command: /refbonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: useless
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("refid")
let refuser = User.getProperty("refusername")
let res = Libs.ResourcesLib.anotherUserRes("balance", id)
res.add(0.5)
let admin = 1078332016
Bot.sendMessageToChatWithId(admin, "USER:- `"+id+"`\n@"+refuser+"Got a Bonus of");

Bot.sendMessageToChatWithId(
  id,
  "📩💣 You have received a Bonus Now your Balance Is\n" +
    res.value().toFixed(1) +
    " DOGE*💣📩 "
)
