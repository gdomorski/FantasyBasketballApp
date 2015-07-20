
var draftTimer = function (duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(function ($) {
    var thirtyMinutes = 60 * 30,
        display = $('#time');
    draftTimer(thirtyMinutes, display);
});


function PlayerProfile(name, username, team, roster) {

  var g = function(str){return document.getElementById(str);};  
  this.firstTeam = g("team1");  
  this.firstOwner = g("owner1"); 
  this.firstRoster = g("roster1");
  this.firstUsername = g("username1");
  this.secondTeam = g("team2");  
  this.secondOwner = g("owner2"); 
  this.secondRoster = g("roster2");
  this.secondUsername = g("username2");
  this.showFirstName = function(){this.firstOwner.textContent = name};
	this.showFirstUsername = function(){this.firstUsername.textContent = username};
	this.showFirstTeam = function(){this.firstTeam.textContent = team};
  this.showFirstRoster = function(){this.firstRoster.textContent = roster};
  this.showSecondName = function(){this.secondOwner.textContent = name};
  this.showSecondUsername = function(){this.secondUsername.textContent = username};
  this.showSecondTeam = function(){this.secondTeam.textContent = team};
  this.showSecondRoster = function(){this.secondRoster.textContent = roster};

  };
  
	

var player1 = new PlayerProfile('Greg Domorski', 'gdomorski', 'The Ballers', [' Russell Westbrook', ' Kevin Durant', ' Lebron James', ' Chris Paul', ' Carmelo Anthony', ' Kyrie Irving', ' James Harden', ' Dwight Howard', ' Derrick Rose']);

var player2 = new PlayerProfile('Katherine Chen', 'kchen', 'Taiwan Pride', [' Stephen Curry', ' Jeremy Lin', ' Tyson Chandler', ' Chandler Parsons', ' Blake Griffin', ' Tim Duncan', ' Manu Ginobilli']);



player1.showFirstName();
player1.showFirstUsername();
player1.showFirstTeam();
player1.showFirstRoster();
player2.showSecondName();
player2.showSecondUsername();
player2.showSecondTeam();
player2.showSecondRoster();
var sample = document.getElementById("soundbar");
sample.play();


function addRow(tableID) {
  var tableCount = 4;
  var tableRef = document.getElementById('playertable');
  var newRow   = playertable.insertRow(tableCount);
  var newCell  = newRow.insertCell(0);
  var anotherCell = newRow.insertCell(1);
  var thirdCell = newRow.insertCell(2);
  var fourthCell = newRow.insertCell(3);
  var firstValue = document.getElementById("theteam").value;
  var secondValue = document.getElementById("personname").value
  var newText  = document.createTextNode(firstValue);
  var otherText  = document.createTextNode(secondValue);
  newCell.appendChild(newText);
  anotherCell.appendChild(otherText);
}

 