(function (){
	

	/*var imagens = [];

	for( var i = 0; i< 12; i++){
		var img = {
			src: "imagens/"+ i + ".jpg",
			id: i%4
		};

		imagens.push(img); //inserir o objeto criado no array
	}

	startgame();



		function startgame() {
				
				imagens = randomSort(imagens); //embaralhador
			alert("OnLoad image"+ imagens/endgame.jpeg );

			var frontFaces = document.getElementsByClassName("front");

			for (var i = 0; i < 12; i++){
				var card = document.querySelector("#card" + i);
				console.log(card); //testando pra ver se esta capturando todos os cards da gretchen
				card.style.left =  (i % 4) === 0 ? 5 + "px" : i%4 * 165 + 7 + "px";
				card.style.top = i / 4 >= 1 ? 5 + "px" : 250 + "px";
				//card.style.bottom = i > 5 ? 5 + "px" : 490 + "px"; 

				card.addEventListener("click", viracarta, false);
				
			frontFaces[i].style.background = "url('"+imagens[i].src+"')";
			frontFaces[i].setAttribute("id",imagens[i].id);

			}
		}


		function randomSort(arrayVelho){
		
			var arrayNovo = [];
		
		
		while(arrayNovo.length !== arrayVelho.length){
			
			var i = Math.floor(Math.random()*12);
			
			
			if(arrayNovo.indexOf(arrayVelho[i]) < 0){
				//caso o bicho não exista, ele é insere um
				arrayNovo.push(arrayVelho[i]);
			}
		}
		
		return arrayNovo;
		
	}

		function viracarta(){
			var faces = this.getElementsByClassName("face");
			faces[0].classList.toggle("virado");//o toggle vai fazer varredura, se houver clicado ele remove, se nao tiver clicado, ele insere.
			faces[1].classList.toggle("virado");
			viracarta.push(this);
		}
*/

var clicks = 0; //counts how may picks have been made in each turn
    var firstchoice; //stores index of first card selected
    var secondchoice; //stores index of second card selected

    var match = 0; //counts matches made
    var backcard = "verso.jpg"; //shows back of card when turned over

    var faces = []; //array to store card images
    faces[0] = '1.jpg';
    faces[1] = '2.jpg';
    faces[2] = '3.jpg';
    faces[3] = '4.jpg';
    faces[4] = '5.jpg';
    faces[5] = '6.jpg';
    faces[6] = '1.jpg';
    faces[7] = '2.jpg';
    faces[8] = '3.jpg';
    faces[9] = '4.jpg';
    faces[10] = '5.jpg';
    faces[11] = '6.jpg';

    function choose(card) {
            if (clicks == 2) {
                return;
            }
            if (clicks == 0) {
                firstchoice = card;
                document.images[card].src = faces[card];
                clicks = 1;
            } else {
                clicks = 2;
                secondchoice = card;
                document.images[card].src = faces[card];
                timer = setInterval("check()", 1000);
            }
        }
        /* Check to see if a match is made */

function check() {
    clearInterval(timer); //stop timer
    clicks = 0;
    if (faces[secondchoice] == faces[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        return;
    }
}



}());



