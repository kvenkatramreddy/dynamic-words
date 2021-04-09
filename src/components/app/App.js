import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function App() {
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  function handleClick(ev) {
    var wordValue = ev.currentTarget.innerHTML;
    if (typeof Storage !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        localStorage.words = localStorage.words + " " + wordValue;
      } else {
        localStorage.clickcount = 1;
        localStorage.words = wordValue;
      }
      // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    }
  }
  function showResults() {
    if (typeof Storage !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = 0;

        document.getElementById("result").innerHTML = localStorage.words;
        Alert.text = "test";
        localStorage.words = "";
        var arr = [
          "ADD",
          "SUB",
          "MULTIPLY",
          "CLASS",
          "SECTION",
          "CONTINUE",
          "BLACK",
          "SOMETHING",
          "HONEY",
          "ICE",
          "TEST",
          "DEV",
          "PROD",
          "UAT",
          "SIT",
          "RELEASE",
          "DEVOPS",
          "RED",
          "GREEN",
          "YELLOW",
          "WHITE",
          "VOILET",
          "HORSE",
          "DOG",
          "CAT",
          "LOCAL",
          "STORAGE",
        ];
        shuffle(arr);
        for (var i = 1; i < 16; i++) {
          document.getElementById("item" + i).innerHTML = arr[i];
        }
      }
    }
  }

  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item" id="item1" onClick={handleClick}>
          CONTINUE
        </div>
        <div className="grid-item" id="item2" onClick={handleClick}>
          NOPE
        </div>
        <div className="grid-item" id="item3" onClick={handleClick}>
          ALTER
        </div>
        <div className="grid-item" id="item4" onClick={handleClick}>
          FIGHT
        </div>
        <div className="grid-item" id="item5" onClick={handleClick}>
          CAT
        </div>
        <div className="grid-item" id="item6" onClick={handleClick}>
          DOG
        </div>
        <div className="grid-item" id="item7" onClick={handleClick}>
          BIRD
        </div>
        <div className="grid-item" id="item8" onClick={handleClick}>
          BLACK
        </div>
        <div className="grid-item" id="item9" onClick={handleClick}>
          WHITE
        </div>
        <div className="grid-item" id="item10" onClick={handleClick}>
          BAT
        </div>
        <div className="grid-item" id="item11" onClick={handleClick}>
          SMILE
        </div>
        <div className="grid-item" id="item12" onClick={handleClick}>
          THERE
        </div>
        <div className="grid-item" id="item13" onClick={handleClick}>
          EAT
        </div>
        <div className="grid-item" id="item14" onClick={handleClick}>
          NEXT
        </div>
        <div className="grid-item" id="item15" onClick={handleClick}>
          ROAD
        </div>
      </div>
      <Button variant="success" onClick={showResults}>
        Continue
      </Button>{" "}
      <div id="result" className="grid-item"></div>
    </div>
  );
}

export default App;
