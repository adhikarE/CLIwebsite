function compile() {

    var input = document.getElementById("line").value.trim();
    var outputText = document.querySelector(".output_text");
    var output = "";
    var userText = document.getElementById("user");

    outputText.innerHTML += "<br>" + "[visitor@ubuntu ~]$" + input + "<br>";

    if (input === "") {} else{
    
        switch (input) {
            case "help":
                output = "List of available commands:-<br>"
                output += "- <b>whoami</b>:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Tell \"Who am i\".<br>"
                output += "- <b>exp</b>:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Lists my work experience till date.<br>"
                output += "- <b>socials</b>:&#160;&#160;&#160;&#160;&#160;&#160;&#160;Shows contact information.<br>"
                output += "- <b>help</b>:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Lists down the valid commands.<br>"
                output += "- <b>clear</b>:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Clears the terminal.";
                break;
            case "whoami":
                output += "Namaste!<br>I am a Network/Security enthusiast & a student who is currently completing my B.Tech in Computer Science and Engineering with a specialization in Cyber Security.<br>I'm currently continuing my studies at NMIMS, Mumbai.<br>For more details/updates please check my socials!";
                break;
            case "exp":
                output += "<b>Sapio Analytics Mumbai</b>: &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<i>Data Privacy Auditor</i><br><br>"
                output += "<b>IT-11 Computer Education Center</b>: &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<i>Programming Instructor</i>."
                break;
            case "socials":
                output += "<a target=\"_blank\" href=\"https://linkedin.com/in/8rupees\" style=\"color: darkgreen;\" >LinkedIn</a><br>";
                output += "<a target=\"_blank\" href=\"https://twitter.com/8rupees\" style=\"color: darkgreen;\" >Twitter / X</a><br>";
                output += "<a target=\"_blank\" href=\"https://github.com/8rupees\" style=\"color: darkgreen;\" >Github</a><br>";
                output += "<a target=\"_blank\" href=\"https://www.reddit.com/user/8rupees/\" style=\"color: darkgreen;\" >Reddit</a><br>";
                break;
            case "clear":
                outputText.innerHTML = "";
                break;
            case "ls":
                output += "README.txt";
                break;
            case "cat readme.txt":
                output += "Fuzzing around i see... You might aswell expect \"cat etc/passwd\" to work. IT'S NOT A REAL TERMINAL!";
                break;
            case "cat etc/passwd":
                window.location = "https://youtu.be/dQw4w9WgXcQ?si=1WLt2cSa__GScU-O";
                output += "SEE YA!";
                break;
            default:
                output = "Command not found: " + input;
                break;
        }
    
        outputText.innerHTML += output + "<br>";
    
        document.getElementById("line").value = "";
    
        outputText.scrollTop = outputText.scrollHeight;
    
        userText.textContent = "[visitor@ubuntu ~]$";
    }

    document.getElementById("line").addEventListener("keypress", function(event){

        if(event.keyCode === 13){

            event.preventDefault();

        }

    });

}
