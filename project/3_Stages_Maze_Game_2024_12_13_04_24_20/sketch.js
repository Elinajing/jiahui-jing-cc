let levels = [
  //level 0
  [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 2],
    [1, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],

  // level 1
  [
    [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 2],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
  ],

  // level 2
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 2],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
];

let currentLevel = 0;
let playerX = 0;
let playerY = 1;
let cellSize;
let smoothX, smoothY;
let reachedExitTimer = 0;
let gameState = "start";
let endTime;
let monsters = []; //level 1 monsters

// Dynamic walls and collectibles in level 2
let collectibles = [];
let collected = 0;
let totalCollectibles = 3;
let wallUpdateTimer = 0;
let wallUpdateInterval = 500; //Update the wall every 0.5 seconds

// Ending confettiparticles
let confettiParticles = [];

//Images
let wallImage;
let exitImage;
let startbackgroundImage;
let customFont;
let playerImages = [];
let monsterImage;
let collectibleImage;

function preload() {
  wallImage = loadImage("flower1.png");
  exitImage = loadImage("flower_exit.png");
  startbackgroundImage = loadImage("flower_start.gif");
  customFont = loadFont("VT323-Regular.ttf");
  playerImages[0] = loadImage("baby.PNG");
  playerImages[1] = loadImage("teenager.PNG");
  playerImages[2] = loadImage("adult.png");
  monsterImage = loadImage("teacher.PNG");
  collectibleImage = loadImage("coin.PNG");
}

function setup() {
  createCanvas(400, 400);
  cellSize = min(width / levels[0][0].length, height / levels[0].length);
  setupLevel();
  noStroke();
}

function draw() {
  background(255);

  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "play") {
    drawMaze();
    drawPlayer();

    if (currentLevel === 1) {
      drawMonsters();
      moveMonsters();
      if (playerHitMonster()) flashAndReset();
    }

    if (currentLevel === 2) {
      updateDynamicWalls();
      drawDynamicWalls();
      drawCollectibles();
      checkCollectibles();

      if (collected === totalCollectibles && reachedExit()) {
        if (reachedExitTimer === 0) {
          reachedExitTimer = millis();
        } else if (millis() - reachedExitTimer > 500) {
          showLevelComplete();
        }
      } else {
        // transparent white background frame
        fill(255, 235);
        rect(5, 5, 133, 30, 5);
        fill(245, 26, 128);
        textSize(20);
        textAlign(LEFT, TOP);
        text(`Collected: ${collected}/${totalCollectibles}`, 10, 10);
        reachedExitTimer = 0;
      }
    } else if (reachedExit()) {
      if (reachedExitTimer === 0) {
        reachedExitTimer = millis();
      } else if (millis() - reachedExitTimer > 500) {
        showLevelComplete();
      }
    } else {
      reachedExitTimer = 0;
    }
  } else if (gameState === "end") {
    drawEndScreen();
  }

  smoothX = lerp(smoothX, playerX, 0.1);
  smoothY = lerp(smoothY, playerY, 0.1);
}

function setupLevel() {
  let maze = levels[currentLevel];
  let rows = maze.length;
  let cols = maze[0].length;
  cellSize = min(width / cols, height / rows);
  // Set the character's starting point according to the current level
  if (currentLevel === 2) {
    playerX = 10;
    playerY = 10;
  } else {
    playerX = 0;
    playerY = 1;
  }

  smoothX = playerX;
  smoothY = playerY;
  reachedExitTimer = 0;

  monsters = []; // Reset the monster
  if (currentLevel === 1) {
    addMonster(6, 2); // Teacher 1
    addMonster(2, 6, true); // Teacher 2 with higher speed
  }
  // Set up collectibles level 2
  collectibles = [];
  if (currentLevel === 2) {
    // collectibles location
    addCollectible(3, 3);
    addCollectible(5, 18);
    addCollectible(12, 5);
    collected = 0;
  }

  // Set up dynamic walls for level 2
  wallUpdateTimer = millis();
}

function addMonster(gridX, gridY, fast = false) {
  let speedMultiplier = fast ? 1.4 : 1; //Teacher 2 with higher speed
  monsters.push({
    x: gridX * cellSize,
    y: gridY * cellSize,
    width: 2 * cellSize,
    height: 2 * cellSize,
    speedX: random(1, 2) * speedMultiplier,
    speedY: random(1, 2) * speedMultiplier,
  });
}

function addCollectible(gridX, gridY) {
  collectibles.push({
    x: gridX * cellSize + cellSize / 2,
    y: gridY * cellSize + cellSize / 2,
    size: cellSize,
  });
}

function drawStartScreen() {
  image(startbackgroundImage, 0, 0, width, height);

  textAlign(CENTER, CENTER);
  textFont(customFont);
  fill(0);
  textSize(50);
  text("START", width / 2 + 8, height / 2 + 10);
}

function mousePressed() {
  if (gameState === "start") {
    // Check if the mouse is within the button range
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 50 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + 50
    ) {
      gameState = "play"; // Switch to game state
      setupLevel(); //Initialize the game
    }
  }
}

function showLevelComplete() {
  if (currentLevel < levels.length - 1) {
    //If it is not the last level, display "LEVEL COMPLETE!" and then go to the next level
    fill(245, 26, 128, 200);
    rect(width / 2 - 150, height / 2 - 30, 300, 60, 38);

    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    textFont(customFont);
    text("LEVEL COMPLETE!", width / 2, height / 2 - 2);

    noLoop();
    setTimeout(nextLevel, 2500);
  } else {
    // If it is the last level, it will display YOU WIN!
    gameState = "end";
  }
}

function drawMaze() {
  let maze = levels[currentLevel];
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        // Wall png
        image(wallImage, x * cellSize, y * cellSize, cellSize, cellSize);
      } else if (maze[y][x] === 2) {
        // Exit png
        image(exitImage, x * cellSize, y * cellSize, cellSize, cellSize);
      } else {
        // Draw blank cells
        fill(255);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

function drawCollectibles() {
  for (let collectible of collectibles) {
    image(
      collectibleImage,

      collectible.x - collectible.size / 2,
      collectible.y - collectible.size / 2,
      collectible.size,
      collectible.size
    );
  }
}

function drawPlayer() {
  let playerImage = playerImages[currentLevel];
  image(
    playerImage,
    smoothX * cellSize,
    smoothY * cellSize,
    cellSize,
    cellSize
  );
}

function drawMonsters() {
  for (let monster of monsters) {
    image(monsterImage, monster.x, monster.y, monster.width, monster.height);
  }
}

function moveMonsters() {
  for (let monster of monsters) {
    monster.x += monster.speedX;
    monster.y += monster.speedY;

    if (monster.x < 0 || monster.x > width - monster.width)
      monster.speedX *= -1;
    if (monster.y < 0 || monster.y > height - monster.height)
      monster.speedY *= -1;
  }
}

function playerHitMonster() {
  let playerCenterX = smoothX * cellSize + cellSize / 2;
  let playerCenterY = smoothY * cellSize + cellSize / 2;

  for (let monster of monsters) {
    if (
      playerCenterX > monster.x &&
      playerCenterX < monster.x + monster.width &&
      playerCenterY > monster.y &&
      playerCenterY < monster.y + monster.height
    ) {
      return true;
    }
  }
  return false;
}

function flashAndReset() {
  fill(245, 26, 128, 150);
  rect(0, 0, width, height);
  setTimeout(() => {
    playerX = 0;
    playerY = 1;
    smoothX = playerX;
    smoothY = playerY;
  }, 500);
}

function updateDynamicWalls() {
  if (millis() - wallUpdateTimer > wallUpdateInterval) {
    wallUpdateTimer = millis();
    let maze = levels[currentLevel];
    let rows = maze.length;
    let cols = maze[0].length;

    // Player and entry/exit locations
    let playerPosition = { x: playerX, y: playerY };
    let entryPosition = { x: 0, y: 1 };
    let exitPosition = findExitPosition(maze);

    // Array of collectibles' locations
    let collectiblePositions = collectibles.map((c) => ({
      x: round((c.x - cellSize / 2) / cellSize),
      y: round((c.y - cellSize / 2) / cellSize),
    }));

    // Randomly change a certain number of walls
    let changes = floor(random(1, 120)); // Change 1 to 119 walls at a time
    for (let i = 0; i < changes; i++) {
      let x = floor(random(1, cols - 1)); // Avoid starting and ending points
      let y = floor(random(1, rows - 1));

      // Checks if it overlaps with the player's position, entrance, exit, or collectible position
      if (
        (x === playerPosition.x && y === playerPosition.y) ||
        (x === entryPosition.x && y === entryPosition.y) ||
        (x === exitPosition.x && y === exitPosition.y) ||
        collectiblePositions.some((pos) => pos.x === x && pos.y === y)
      ) {
        continue; // Skip this location
      }

      // Update wall status
      if (maze[y][x] === 1) {
        maze[y][x] = 0; // Remove Walls
      } else if (maze[y][x] === 0) {
        maze[y][x] = 1; // Add walls
      }
    }
  }
}

// finding exit locations
function findExitPosition(maze) {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[0].length; x++) {
      if (maze[y][x] === 2) {
        return { x, y };
      }
    }
  }
  return null; // If no exit is found
}

function drawDynamicWalls() {
  let maze = levels[currentLevel];
  let rows = maze.length;
  let cols = maze[0].length;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (maze[y][x] === 1) {
        // For dynamic walls
        push();

        // Dynamic zoom effect
        let scaleEffect = 0.9 + 0.1 * sin(frameCount * 0.1);

        // Calculate the center position of the wall
        let posX = x * cellSize + cellSize / 2;
        let posY = y * cellSize + cellSize / 2;

        // Set the color gradient effect
        let colorShift = map(sin(frameCount * 0.05 + x * y), -1, 1, 100, 255);
        fill(100, colorShift, 200);

        // Zoom effect
        translate(posX, posY);
        scale(scaleEffect);
        rectMode(CENTER);
        rect(0, 0, cellSize, cellSize);

        pop();
      }
    }
  }
}

function checkCollectibles() {
  for (let i = collectibles.length - 1; i >= 0; i--) {
    let collectible = collectibles[i];
    let playerCenterX = smoothX * cellSize + cellSize / 2;
    let playerCenterY = smoothY * cellSize + cellSize / 2;
    let distance = dist(
      playerCenterX,
      playerCenterY,
      collectible.x,
      collectible.y
    );
    if (distance < cellSize / 2) {
      collectibles.splice(i, 1); // Remove collected
      collected++;
    }
  }
}

function keyPressed() {
  let newX = playerX;
  let newY = playerY;

  if (keyCode === UP_ARROW) newY--;
  else if (keyCode === DOWN_ARROW) newY++;
  else if (keyCode === LEFT_ARROW) newX--;
  else if (keyCode === RIGHT_ARROW) newX++;

  let maze = levels[currentLevel];
  if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length) {
    if (maze[newY][newX] !== 1) {
      playerX = newX;
      playerY = newY;
    }
  }
}

function reachedExit() {
  let maze = levels[currentLevel];
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 2) {
        // 2 represents exit
        let exitX = x * cellSize + cellSize / 2;
        let exitY = y * cellSize + cellSize / 2;
        let playerCenterX = smoothX * cellSize + cellSize / 2;
        let playerCenterY = smoothY * cellSize + cellSize / 2;
        let distance = dist(playerCenterX, playerCenterY, exitX, exitY);
        if (distance < cellSize / 2) {
          return true;
        }
      }
    }
  }
  return false;
}

function nextLevel() {
  if (currentLevel < levels.length - 1) {
    currentLevel++;
    setupLevel();
    loop();
  } else {
    // Make sure to end directly after the last level
    gameState = "end";
    endTime = millis();
    noLoop();
  }
}

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.color = color(random(255), random(255), random(255));
    this.speedY = random(1, 3);
    this.speedX = random(-1, 1);
    this.alpha = 255;
  }

  draw() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.alpha -= 2; // Gradually becomes transparent
    if (this.alpha <= 0) {
      this.alpha = 0;
    }
  }

  // Check if Confetti disappeared
  isGone() {
    return this.alpha <= 0 || this.y > height;
  }
}

function drawEndScreen() {
  image(wallImage, 0, 0, width, height);
  fill(245, 26, 128);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("YOU WIN!", width / 2, height / 2 - 25);

  // Show Replay Button
  fill(245, 26, 128);
  rect(width / 2 - 50, height / 2 + 14, 100, 50, 10);

  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Replay", width / 2, height / 2 + 35);

  // Generate Confetti particles
  if (frameCount % 5 === 0) {
    // Generate particles every certain number of frames
    for (let i = 0; i < 5; i++) {
      // Generate multiple particles at a time
      let x = random(width); // Random X position
      let y = random(-50, 0); // Start slightly above the screen
      confettiParticles.push(new Confetti(x, y));
    }
  }

  // Draw and update confetti particles
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    let particle = confettiParticles[i];
    particle.draw();
    particle.update();

    // Remove disappeared particles
    if (particle.isGone()) {
      confettiParticles.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (gameState === "start") {
    // Check if the mouse is in the range of the "Start" button
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 50 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + 50
    ) {
      gameState = "play"; 
      setupLevel(); // Initialize the game
    }
  } else if (gameState === "end") {
    // Check if the mouse is in the range of the "Replay" button
    console.log("In End Screen - Checking Replay Button");
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 50 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + 50
    ) {
      console.log("Replay Button Pressed");
      resetGame(); // Reset the game
    }
  }
}

function resetGame() {
  console.log("Resetting Game");
  gameState = "start";
  currentLevel = 0;
  collected = 0;
  setupLevel();
  loop(); // Restart the loop
}
