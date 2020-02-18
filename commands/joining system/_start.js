/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: joining system
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance")

Bot.runCommand("/started")

function hello(message) {
  let greetings =
    "Hello, @" +
    user.username +
    "! \nTelegramID: " +
    user.telegramid +
    " Welcome\n"

  Bot.sendMessage(greetings + "\n" + message)
}

function doAtractedByUser(refUser) {
  hello("👍you clicked the referral link of:"+refUser.first_name+" @"+refUser.username);
let referralid = parseFloat(refUser.telegramid);
 let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  refUserBonus.add(500); 
Bot.sendMessageToChatWithId(refUser.chatId, "A User have joined the bot using your referral link.")
}

let trackOptions = {doAtractedByUser}

Libs.ReferralLib.currentUser.track(trackOptions)
