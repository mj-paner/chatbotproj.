function talk(){
var know = {
	"what are you doing now" : "well,I have to finished all my projects.",
	"ok bye take your time" : "oh.....thank you!! bye..take care.",
	"your dog look so beautiful" : "oh.....thank you!!.",
	"i miss you" : "i miss you to.",
	"i love you" : "i love you to.",
	"hellow" : "hi.",
	"God is good all the time" : "All the time God is good.",
"hi" : "Hi,I'm Mary Joe Paner.",
	"what is your name?" : "I'm Jennyrose Baulite.",
 "how old are you?" : "21 years old :)",	
 "how are you?" : "Good :)",
"what is your favorite color?" : "Pink.",
	"where do you live?" : "I, lived in Tungawan.",
	"what is your motto in life?" : "Dreams don't work unless you do.",
"what can i do for you?" : "Please Give us A Subscribe.",
 "ok" : "Thank You So Much <3",
 "bye" : "Okay! Will meet soon. TC:).."
	

	};
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}