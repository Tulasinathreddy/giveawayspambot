/*CMD
  command: /started
  help: 
  need_reply: 
  auto_retry_time: 
  folder: joining system

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let id = User.getProperty("refid")
let refuser = User.getProperty("refusername")

var is_used=User.getProperty("is_used")
if(!is_used){
let res = Libs.ResourcesLib.userRes("balance")
res.add(1000)
//add your bjs here that will run only once time per user
User.setProperty("is_used",true,"boolean")
}

Bot.sendMessage("Bittrex Global provides a proven and *secure platform* for its customers to access the opportunities of digital asset trading. Built on Bittrex’s cutting-edge technology, Bittrex Global provides an institutional grade experience for professional and novice customers alike.")
Bot.sendMessage("You Got a Joining Bonus of 1000 Doge");
Bot.runCommand("home")
