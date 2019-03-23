const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const thePause = document.querySelector("#Pause");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

var myarray =["Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor. Him had wound use found hoped. Of distrusts immediate enjoyment curiosity do. Marianne numerous saw thoughts the humoured.", 

    "View fine me gone this name an rank. Compact greater and demands mrs the parlors. Park be fine easy am size away. Him and fine bred knew. At of hardly sister favour. As society explain country raising weather of. Sentiments nor everything off out uncommonly partiality bed. Arrived totally in as between private. Favour of so as on pretty though elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished so be expect polite valley. Whose asked stand it sense no spoil to. Prudent you too his conduct feeling limited and. Side he lose paid as hope so face upon be. Goodness did suitable learning put.", 

    "His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve hastily sitting forming. Especially favourable compliment but thoroughly unreserved saw she themselves. Sufficient impossible him may ten insensible put continuing. Oppose exeter income simple few joy cousin but twenty. Scale began quiet up short wrong in in. Sportsmen shy forfeited engrossed may can. For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.",

    "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly. Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led offending. Admitting an performed supposing by. Garden agreed matter are should formed temper had. Full held gay now roof whom such next was. Ham pretty our people moment put excuse narrow. Spite mirth money six above get going great own. Started now shortly had for assured hearing expense. Led juvenile his laughing speedily put pleasant relation offering.",

    "Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near.",

    "Sommige schijnt gegoten javanen wij lot opening bronnen kan. Rang heft zake in want ik stad volk. En slaagden na verwoede ze schatten. Men hollanders verdwijnen gomsoorten ton primitieve zit. Te duim om door de iets en. Tot rug meestal goa schijnt mei vlakken. Er generaal nu af district kinderen kleinste of. Dal ijzererts alluviale mee voorkomen maleische siameezen was dit bewegende. Aandacht ik de opbrengt er mogelijk vermengd. Malakka ze na soorten bevrijd. Ik duizend vreemde tijgers nu. Opmeting grootste verbouwd talrijke al centraal in. Stellen waarmee motoren de pataten af. In beide nu ik lucht laten te. Er bontste tijgers heuvels ze er bewerkt vrouwen. Gebergten bevolking alluviale zij bij arbeiders. Als meer rug hard wat twee eens stof wijk. In diepte ik om bekend er eerste.",

    "Duim uit der als hand toe erin. Vinden sedert na omtrek binnen op tunnel ze zuiger. Hij assam werkt hun komen groei ons zeker klein. Wiel ook tien dan eens deze. Holte er ouder zelfs de peper naast en. Dal tinwinning wij voertuigen handelaars woekeraars die bak. Spelen altijd are sumper ook toppen rug wij. Alluviale of wijselijk belovende ze ingericht. Uren meer na kilo vorm twee te. Tinwinning om nu karrijders voorloopig handelaars kwartspuin locomobiel. Bekend zakken kamper dat die breken zoo deelen. Dat valt stam bord tot zit klei mag. Tot aan gouden ook vijand levert. Datzelfde vermijden bij dal gezuiverd ongunstig japansche zij kapitalen. Meehelpen aardschok hoofdzaak belasting lot vertoonen dik. Bamboe gebrek of bezoek op breidt in. Gezift al ad lijden gedaan ze de.",

    "Krachtige nu behoeften kapitalen schepping olifanten na. Als tin oorzaak aangaat simplon terrein mochten eischen aan. Gebergten ongunstig verkregen belasting nutteloos mei zit. Omdat ander werkt in te noemt om. Weg met rug deze meer dus wiel vijf daar kwam. Naast tot kreeg ten far mooie dient. Van dat dekt dan werk twee goud dit. Op wassching schepping stichting maleische om al.Alles spijt maken deden te er op steun. Heen zes wel deze geur. Dag brandstof volhouden ingenieur die afscheidt loodrecht. Twee ze er al lama toen apen. Ze verkoopen nu britschen antwerpen te nu. Stroeve grooten zal dat ontdaan oog kintyas schenen donkere. Duizend woonden behoeft in ik menigte ad afwegen en haalden.",

    "Af er groot halen ze naast alais. Sap heeft china wel alais zware telde ouden. Inlandsche kwartspuin er in uiteenvalt is. Ze op streken behalen gemengd slechts dollars in. Perzische in gebergten duimbreed weerstand vreedzame in. Werden lot hen sakais handen spelen ton voeten tonnen aan. Ad wijk en ze stad ik toch. Te sterft noodig al sedert.Bovendien aangelegd des beteekent bovendien per hun uitrollen men. Boomen zes die die eerder steeds tot lossen. Ons federatie had wel vochtigen gebruiken snelleren. Zelfs dient al wegen thans te allen. Gaat in ze vier dekt boom valt. Lateriet centraal ik pogingen strooien op. Na kamarat gevolge taiping ze te kleeren genomen nu."];
    
    var randomItem= myarray[Math.floor(Math.random()*myarray.length)];
    document.getElementById("showtext").innerHTML=randomItem;



// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = randomItem.substring(0,textEntered.length);

    if (textEntered == randomItem) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength >= 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

    var abc= myarray[Math.floor(Math.random()*myarray.length)];
    document.getElementById("showtext").innerHTML=abc;
    return abc;
}

function pause()
{
    clearInterval(interval);
    timerRunning= false;
}

var abc=reset();
randomItem=abc;
console.log(randomItem);




// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
thePause.addEventListener("click",pause,false);

