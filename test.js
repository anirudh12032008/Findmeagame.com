function getGame() {
var quotes = new Array(4);
var sources = new Array(4);
var img = new Array(4);


quotes[0] = "Cricket";
sources[0] = "6-22 players";
img[0] = `<img
    src="https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
    alt="cricket image" style="height:50vh; border-radius: 5px;">`


quotes[1] = "football";
sources[1] = "6-24 players";
img[1] = `<img
    src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`

quotes[2] = "basketball";
sources[2] = "4-10 players";
img[2] = `<img
    src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`

quotes[3] = "volleyball";
sources[3] = "5-12 players";
img[3] = `<img
    src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    alt="" style="height: 50vh; border-radius: 5px;">`


i = Math.floor(Math.random() * quotes.length);
document.write( `<div class="container"> <p style='background-color: #ffb6c1 text-align: center'>\"`);
        document.write(quotes[i] + "\"");
        document.write("<em>- " + sources[i] + "</em>");
        document.write("</p> ");
    document.write(img[i] + "\"");
    document.write('<button onclick="getGame()">Get game</button>');
    document.write(" </div> ");
}