let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight(classType);
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Rama":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Laxmana":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Sita":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Hanuman":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="C:/Users/ssand/Desktop/rootfolder/javascript/project3/images/heros/' + classType.toLowerCase() + '.jpg" class="img_avatar"><div><h3>'+ classType +'</h3><p>Health: '+ player.health +'</p><p>Mana: '+ player.mana +'</p></p><p>strength: '+ player.strength +'</p><p>Ability: '+ player.ability +'</p><p>Speed: '+ player.speed +'</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getBatlefield = document.querySelector(".Battle_field");
    getHeader.innerHTML = '<p> Task: Find an enemy! </p>';
    getActions.innerHTML = '<a href="#" class="btn-preFight" onclick="GameManager.setFight()"> Search for an enemy..! </a>';
    getBatlefield.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // create enemy..

    let enemy00 = new Enemy("Ravana", 200, 10, 150, 100, 100);
    let enemy01 = new Enemy("Kumbhkarna", 150, 0, 100, 80, 100);
    let enemy02 = new Enemy("killing_flower", 100, 8, 50, 800, 120);

    // there is no function in javascript to create random number so we are creating by our own...
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));

    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
    }
    getHeader.innerHTML = '<p> Task: Choose your move!</p>';
    getActions.innerHTML = '<a href="#" class="btn-preFight" onclick="playerMoves.calcAttack()"> Attack!..</a>';
    getEnemy.innerHTML = '<img src="C:/Users/ssand/Desktop/rootfolder/javascript/project3/images/enemy/' + enemy.enemyType.toLowerCase() + '.jpg" class="img_avatar"><div><h3>'+ enemy.enemyType +'</h3><p>Health: '+ enemy.health +'</p><p>Mana: '+ enemy.mana +'</p></p><p>strength: '+ player.strength +'</p><p>Ability: '+ enemy.ability +'</p><p>Speed: '+ enemy.speed +'</p></div>';
  }
}
