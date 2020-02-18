/*CMD
  command: reflink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: home
  answer: 
  keyboard: 
  aliases: 👥 invite 👥
CMD*/

let reflink = Libs.ReferralLib.currentUser.getRefLink("Dogerefbot")
let refList = Libs.ReferralLib.currentUser.refList.get()
let res = Libs.ResourcesLib.userRes("balance")

let refid = User.getProperty("refid")

Bot.sendMessage(
  "Get *Bonus 500 Doge* For Every New Referral\n\nReflink 👇\n[" +
    reflink +
    "]\n\nYour Referrals : " +
    refList.length +
    ""
)

