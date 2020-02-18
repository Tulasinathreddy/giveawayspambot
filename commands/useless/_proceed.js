/*CMD
  command: /proceed
  help: 
  need_reply: 
  auto_retry_time: 
  folder: useless
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = User.getProperty("wd")
let wallet = User.getProperty("addressDoge")
let res = Libs.ResourcesLib.userRes("balance")

if (wallet == undefined) {
  Bot.sendMessage("Please Set You're Dogecoin Address To Withdraw")
  return
}
Bot.sendMessageToChatWithId(
  1078332016,
  "Withdrawal Made ✅\n\nAmount : " +
    amount +
    " DOGE 🧾\n\nAddress : `" +
    wallet +
    "`" +
    "\n\nBy User : @" +
    user.username
)
res.remove(amount)
