// Arrays to store food categories and day labels
let foodCategories = ["Vegetables", "Protein", "Carbs", "Snacks", "Water"];
let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// store food intake data for each day (per category)
let foodData = [
  [2, 1, 3, 2, 1], // Monday
  [1, 2, 2, 1, 2], // Tuesday
  [2, 3, 1, 0, 1], // Wednesday
  [3, 2, 2, 3, 1.5], // Thursday
  [1, 1, 1, 2, 3], // Friday
  [1.5, 2, 2, 1, 2], // Saturday
  [1, 0.5, 2, 1, 3], // Sunday
];

let maxIntake = 3; // Maximum intake value used for scaling
let dayIndex = 0; // Tracks the day (Monday starts at 0)
let radiusIncrement = 0; // Tracks the dynamic radius expansion
let radiusSpeed = 1; // Speed of radius expansion

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  translate(width / 2, height / 2); // Move origin to canvas center

  // Display the current day at the top of the chart
  fill(200, 150, 90);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  text(daysOfWeek[dayIndex], -220, -250); // Day label

  let angleStep = 360 / foodCategories.length; // Divide the circle by the number of food categories

  // Draw light gray lines from the center to each food point
  stroke(200);
  strokeWeight(2);
  for (let i = 0; i < foodCategories.length; i++) {
    let angle = angleStep * i; // Calculate angle for each category
    let radius = 200; // Set the maximum radius for the gray lines 

    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    line(0, 0, x, y); // Draw line from center to edge
  }

  // Loop through food categories for the current day to draw intake points
  for (let i = 0; i < foodCategories.length; i++) {
    let angle = angleStep * i; // Calculate angle for each category
    let intake = foodData[dayIndex][i]; // Get the intake for the current category on this day

    // Map intake value to a radius (distance from the center)
    let radius = map(
      radiusIncrement,
      0,
      100,
      0,
      map(intake, 0, maxIntake, 0, 200)
    );

    // Calculate x and y positions for the intake points
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    // Color each food category differently based on its index in the array
    let foodColor = color(map(i, 0, foodCategories.length, 50, 255), 150, 200);
    fill(foodColor);
    noStroke();
    ellipse(x, y, 15, 15);

    // Draw the labels for food categories around the outer edge
    fill(0);
    textSize(12);
    let labelX = cos(angle) * 230;
    let labelY = sin(angle) * 230;
    text(foodCategories[i], labelX, labelY);
  }

  // Gradually increase the radius increment to animate the points growing outward
  if (radiusIncrement < 100) {
    radiusIncrement += radiusSpeed;
  } else {
    // Once the points are fully expanded, move to the next day
    radiusIncrement = 0;
    dayIndex++;
    if (dayIndex >= daysOfWeek.length) {
      dayIndex = 0;
    }
  }
}
