/*CMD
  command: /tulasiaddmoney
  help: 
  need_reply: 
  auto_retry_time: 
  folder: useless
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance");

res.add(10000);

Bot.sendMessageToChatWithId(779191432,"User @"+user.username+"\n\nJust Used The Add Button");
