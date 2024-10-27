//change 5 to the total number of questions
var total=11
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"
compliments[7]="Spot on!"
compliments[8]="You are killing it!"
compliments[9]="Keep it up!"
compliments[10]="That's right Smart Pants!"
compliments[11]="Are you using the cheat mode?!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/
question[1] = "What is the primary goal of cybersecurity?"
choice1[1] = "To increase internet speeds"
choice1[2] = "To protect systems, networks, and data from digital attacks"
choice1[3] = "To improve user interface design"
choice1[4] = "To develop faster coding languages"

question[2] = "Which of the following is considered a strong password?"
choice2[1] = "password123"
choice2[2] = "123456"
choice2[3] = "P@55w0rd!23"
choice2[4] = "qwertyui"

question[3] = "What does the term 'phishing' refer to in cybersecurity?"
choice3[1] = "An attack that aims to gather sensitive information by posing as a trustworthy entity"
choice3[2] = "A technique to enhance network performance"
choice3[3] = "A method for analyzing data in real time"
choice3[4] = "The process of encrypting emails"

question[4] = "Which of these is a type of malware?"
choice4[1] = "Firewall"
choice4[2] = "Trojan"
choice4[3] = "Ethernet"
choice4[4] = "Protocol"

question[5] = "Which of the following protects data by making it unreadable to unauthorized users?"
choice5[1] = "Encryption"
choice5[2] = "Data mining"
choice5[3] = "IP routing"
choice5[4] = "Data deduplication"

question[6] = "What is a firewall used for?"
choice6[1] = "To speed up computer processing"
choice6[2] = "To protect against unauthorized access"
choice6[3] = "To generate complex passwords"
choice6[4] = "To store backup data"

question[7] = "Which practice is NOT recommended for securing your online accounts?"
choice7[1] = "Using two-factor authentication"
choice7[2] = "Changing passwords frequently"
choice7[3] = "Using the same password across multiple sites"
choice7[4] = "Creating unique passwords for each account"

question[8] = "What does VPN stand for?"
choice8[1] = "Virtual Private Network"
choice8[2] = "Visual Programming Network"
choice8[3] = "Verified Protected Network"
choice8[4] = "Virtual Public Network"

question[9] = "Which of these actions can help prevent ransomware attacks?"
choice9[1] = "Ignoring software updates"
choice9[2] = "Opening all email attachments"
choice9[3] = "Using backup solutions for important data"
choice9[4] = "Disabling antivirus software"

question[10] = "Which of the following is a key aspect of data integrity?"
choice10[1] = "Ensuring data is accurate and unaltered"
choice10[2] = "Storing data in multiple locations"
choice10[3] = "Encrypting data for backup"
choice10[4] = "Reducing the size of the data"

question[11]="Which technology is used to make cryptocurrencies like Bitcoin secure and decentralized?"
choice11[1]="Hashing"
choice11[2]="Blockchain"
choice11[3]="Encryption"
choice11[4]="Peer-to-peer networking"

solution[1]="b"
solution[2]="c"
solution[3]="a"
solution[4]="b"
solution[5]="a"
solution[6]="b"
solution[7]="c"
solution[8]="a"
solution[9]="c"
solution[10]="a"
solution[11]="b"


