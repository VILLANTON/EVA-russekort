<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet">
    
</head>
<body>
    <div id="main_input">
        <h1>Lag ditt russekort her</h1>
        <form action="https://formsubmit.co/tiniusespen@email.com" method="POST">
            <p>Ditt navn:</p>
            <input type="text" id="navn_input" placeholder="navn etternavn">
            <p>Telf</p>
            <input type="number" id="telf_input" placeholder="(+47) 981 54 741">
            <p>Skole</p>
            <select name="" id="skole">
                <option value="mailand videregående skole">Mailand vgs</option>
                <option value="lørenskog videregående skole">Lørenskog vgs</option>
                <option value="lillestrøm videregående skole">Lillestrøm vgs</option>
            </select>
            <p>farge</p>
            <div id="russFarge">
                <input type="radio" name="russFarge" value="rød"><span>Rødruss</span>
                <input type="radio" name="russFarge" value="blå"><span>Blåruss</span>
                <input type="radio" name="russFarge" value="svart"><span>Svartruss</span>
                <input type="radio" name="russFarge" value="grønn"><span>Bonderuss</span>
            </div>
            <button type="button" onclick="displayRadioValue()">
                Submit
            </button>
            
            <p>bilde og sitat</p>
            <button id="bilde_input">Nytt bilde</button>
            <button id="sitat_input">Nytt sitat</button>
            <p>hvor skal vi sende den?</p>
            <input placeholder="e-post" type="email" name="email" required>
            <button type="submit" >Send</button>
        </form>
    </div>
    <div id="main2">
        <div id="russenavn">Mailand videregående skole</div>
        <div class="bilde"><img class="bilde"id="bilde" src="tabby-cat.jpg"></div>
        <div id="russelue"><img id="russelue" src="Russelue.png"></div>
        <div class="russefont" id="russetype">Rødruss</div>
        <div id="navn">Navn Navnesen</div>
        <div id="telf">98154741</div>
        <div id="sitat">umorsomt sitat</div>
    </div>
</body>
</html>
<script src="russekort.js"></script>
