/*CMD
  command: /bal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: home
  answer: 
  keyboard: 
  aliases: 💰 balance 💰
CMD*/

let res = Libs.ResourcesLib.userRes("balance")
let reflink = Libs.ReferralLib.currentUser.getRefLink("Dogerefbot")

Bot.sendMessage(
  "Your Doge Balance :" +
    res.value().toFixed(1) +
    "\n\nYour Referral Link : " +
    reflink +
    "\n\nYou will get 500 DOGE for every Valid Referral"
)

