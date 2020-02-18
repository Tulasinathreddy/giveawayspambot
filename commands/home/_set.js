/*CMD
  command: /set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: home

  <<ANSWER
Send Your Doge Coin Wallet address
*This Wallet Will be Used For all The withdrawls*
  ANSWER
  keyboard: Back
  aliases: 📑 set wallet 📑
CMD*/

let msg = message
if (message == "Back") {
  Bot.runCommand("home")
  return
}
User.setProperty("addressDoge", msg, "text")
Bot.sendMessage(" Wallet Set Successfully \n`" + msg + "`")

