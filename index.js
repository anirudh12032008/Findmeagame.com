

function disableButton() {
    var btn = document.getElementById("btn1");
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function showhtp() {
    var x = document.getElementById("howtp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function getGame() {
    var name = new Array(9);
    var sources = new Array(9);
    var img = new Array(9);
    var htp = new Array(9);


    name[0] = "Cricket";
    sources[0] = "6-22 players";
    htp[0] = "How to play"
    img[0] = `<img
    src="https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    alt="cricket image" style="height:50vh; border-radius: 5px;">`


    name[1] = "football";
    sources[1] = "6-24 players";
    htp[1] = "How to play"
    img[1] = `<img
    src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`

    name[2] = "basketball";
    sources[2] = "4-10 players";
    htp[2] = "How to play"
    img[2] = `<img
    src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`

    name[3] = "volleyball";
    sources[3] = "5-12 players";
    htp[3] = "How to play"
    img[3] = `<img
    src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`



    name[4] = "Chess";
    sources[4] = "2 players";
    htp[4] = "How to play"
    img[4] = `<img
    src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`



    name[5] = "Carrom";
    sources[5] = "2-4 players";
    htp[5] = "How to play"
    img[5] = `<img
    src="https://images.unsplash.com/photo-1617300067484-314ed2cfd9a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`



    name[6] = "UNO";
    sources[6] = "2-10 players";
    htp[6] = "How to play"
    img[6] = `<img
    src="https://images.unsplash.com/photo-1595538742276-54d443f3b575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`



    name[7] = "Matchstick Puzzle";
    htp[7] = "How to play"
    sources[7] = "2-10 players";
    img[7] = `<img
    src="https://media.istockphoto.com/photos/numbers-made-with-matches-picture-id106587785?s=612x612"
    alt="" style="height: 50vh; border-radius: 5px;">`



    name[8] = "Cups Game";
    sources[8] = "2-10 players";
    htp[8] = "How to play"
    img[8] = `<img
    src="https://media.istockphoto.com/photos/office-work-picture-id865052644?s=612x612"
    alt="" style="height: 50vh; border-radius: 5px;">`


    i = Math.floor(Math.random() * name.length);
    // document.write(`<h1>Random Games Finder</h1> <p>Get Random games</p>`)
    let game = (name[i]);
    let players = (sources[i]);
    let image = (img[i]);
    let howtp = (htp[i]);
    let content = `<div class="container" style= "display: flex; background-color: antiquewhite; align-items: center; flex-direction: column;"><h1> ${game} <br> </h1>  <p style='background-color: #ffb6c1 text-align: center'> ${players} </p> ${image} <p id="howtp" style="display: none"> ${howtp} </p> <button style=" margin: 7px; padding: 5px 10px; background-color:  rgb(130, 88, 226) ; color: black; font-weight: bold ; width: 30vh; height: 10vh;" onclick="showhtp();" id="htp"> How To Play </button> <button style=" margin: 7px; padding: 5px 10px; background-color:  rgb(130, 88, 226) ; color: black; font-weight: bold ; width: 30vh; height: 10vh;" onclick="getGame();">Get game</button> </div>`
    document.getElementById("container").innerHTML = content
    // document.write(`<div class="container" style= "display: flex; background-color: antiquewhite; align-items: center; flex-direction: column;"> `);
    // document.write(`<h1> `);
    // document.write(name[i] + `<br>`);
    // document.write(`</h1> `);
    // document.write(` <p style='background-color: #ffb6c1 text-align: center'>`);
    // document.write("<em> " + sources[i] + "</em>");
    // document.write("</p> ");
    // document.write(img[i]);
    // document.write('<button style=" margin: 7px; padding: 5px 10px; background-color:  rgb(130, 88, 226) ; color: black; font-weight: bold ; width: 30vh; height: 10vh;" onclick="getGame()">Get game</button>');
    // document.write(" </div> ");
}