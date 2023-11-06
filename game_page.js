
player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name  + " : ";
document.getElementById("player2_name").innerHTML = player2_name  + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de pergunta "+ player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de resposta "+ player2_name ;

function send() {

get_word = document.getElementById("word").value;
word = get_word.lowerToCase();
console.log("palavras em letras minusculas")

Char1At = word.charAt(1);
console.log(Char1At);

lenght_divide_2 = Math.floor(word.lenght/2)
Char2At = word.charAt(lenght_divide_2);
console.log(Char2At);

lenght_minus_1 = word.lenght - 1
Char3At = word.charAt(lenght_minus_1);
console.log(Char3At);

remove_CharAt1 = word.replace(charAt1, "_")
remove_CharAt2 = remove_CharAt1.replace(charAt2, "_")
remove_CharAt3 = remove_CharAt2.replace(charAt3, "_")
console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_CharAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";



question_turn = "player1";
answer_turn = "player2";


}
function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("resposta em letras minúsculas - " + answer);
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}