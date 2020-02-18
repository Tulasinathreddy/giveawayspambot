/*CMD
  command: on_withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: home
  answer: *Send the amount you want to Withdraw*
  keyboard: Back 🔙
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance");

let amount = parseFloat(message);

let wallet = User.getProperty("addressDoge");
if (message=="Back 🔙"){
Bot.runCommand("home");
return 
}
if (balance.value()<9){
Bot.sendMessage("Please Withdraw Above 10 DOGE");
return
}

if (amount>balance.value()|amount<100){
Bot.sendMessage("Please Withdraw Within You're Balance \nYoure Balance : "+(balance.value()).toFixed(8))
return
}

if (!wallet){
Bot.sendMessage("Please Set Up You're Wallet First");
return
}

balance.remove(amount); 

let admin = 1078332016
Bot.sendMessageToChatWithId(admin, "New Withdrawal Was Made ⚠\n\n*👤 User :* [@"+user.username+"]\n*💰 Amount : *"+amount+"\n*📤 Payout Address Was : * `"+wallet+"`");
Bot.sendMessage("*Withdrawal Requested*\n\nAmount:- "+amount+" Doge\nTo address:\n`"+wallet+"`\n\n`Withdrawal Processing..... {ETA :- 02 HOURS}`");
Bot.runCommand("home");
