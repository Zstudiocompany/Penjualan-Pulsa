let button1Clicks = 0;
let button2Clicks = 0;

const myButton = document.getElementById("myButton");

document.getElementById("button01").addEventListener("click", function() {
  button1Clicks++;

  if (button1Clicks >= 1) {
    myButton.innerHTML = `
	<main>
		<section>
			<div id="myButton" class="style_content">
				<div class="Wrapper">
				  <button class="Tombol" id="button2"> <p class="Text_Mybutton"> Rp. 10.000 </p> <p class="Text_Mybills">Rp. 12.000</p> </button>
				  <button class="Tombol" id="button3"> <p class="Text_Mybutton"> Rp. 15.000 </p> <p class="Text_Mybills">Rp. 17.000</p> </button>
				  <button class="Tombol" id="button4"> <p class="Text_Mybutton"> Rp. 20.000 </p> <p class="Text_Mybills">Rp. 22.000</p> </button>
				  <button class="Tombol" id="button5"> <p class="Text_Mybutton"> Rp. 25.000 </p> <p class="Text_Mybills">Rp. 27.000</p> </button>
				</div>
			  </div>
		</section>
	</main>`;
  }
});

document.getElementById("button02").addEventListener("click", function() {
  if (button1Clicks >= 1) {
    myButton.innerHTML = `
  <main>
  <section>
			<div id="myButton" class="style_content">
				<div class="Wrapper">
				  <button class="Tombol" id="button2"> <p class="Text_Mybutton"> Rp. 10.000 </p> <p class="Text_Mybills">Rp. 12.0000</p> </button>
				  <button class="Tombol" id="button3"> <p class="Text_Mybutton"> Rp. 15.000 </p> <p class="Text_Mybills">Rp. 17.0000</p> </button>
				  <button class="Tombol" id="button4"> <p class="Text_Mybutton"> Rp. 20.000 </p> <p class="Text_Mybills">Rp. 22.0000</p> </button>
				  <button class="Tombol" id="button5"> <p class="Text_Mybutton"> Rp. 25.000 </p> <p class="Text_Mybills">Rp. 27.0000</p> </button>
				</div>
			  </div>
		</section>
	</main>`;
  }
});

// handle click on button 2
document.getElementById("button02").addEventListener("click", function() {
  button2Clicks++;
  if (button2Clicks >= 1) {
    myButton.innerHTML = 
    `<main>
		<section>
			<div id="myButton">
				<div class="Wrapper">
				  <button class="Tombol" id="button2"> <p class="Text_Mybutton"> Rp. 10.000 </p> <p class="Text_Mybills">Rp. 12.00000</p> </button>
				  <button class="Tombol" id="button3"> <p class="Text_Mybutton"> Rp. 15.000 </p> <p class="Text_Mybills">Rp. 17.00000</p> </button>
				  <button class="Tombol" id="button4"> <p class="Text_Mybutton"> Rp. 20.000 </p> <p class="Text_Mybills">Rp. 22.00000</p> </button>
				  <button class="Tombol" id="button5"> <p class="Text_Mybutton"> Rp. 25.000 </p> <p class="Text_Mybills">Rp. 27.00000</p> </button>
				</div>
			  </div>
		</section>
	</main>`;
  }
});

document.getElementById("button03").addEventListener("click", function() {
  button2Clicks++;
  if (button2Clicks >= 1) {
    myButton.innerHTML = "<div class='style_diamonds__leOZA'>300 Diamond</div><div class='style_extra__2sso7'>+ 3 Bonus</div>";
  }
});

document.getElementById("button04").addEventListener("click", function() {
  button2Clicks++;
  if (button2Clicks >= 1) {
    myButton.innerHTML = "<div class='style_diamonds__leOZA'>3000 Diamond</div><div class='style_extra__2sso7'>+ 3 Bonus</div>";
  }
});

document.getElementById("button05").addEventListener("click", function() {
  button2Clicks++;
  if (button2Clicks >= 1) {
    myButton.innerHTML = "<div class='style_diamonds__leOZA'> Diamond</div><div class='style_extra__2sso7'>+ 3 Bonus</div>";
  }
});
