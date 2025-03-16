let dog, cat;
let foodX, foodY;
let fedDog = false, fedCat = false;

function setup() {
    // Create a canvas inside the 'canvasContainer' div
    let canvas = createCanvas(400, 400);
    canvas.parent('canvasContainer');

    // Define initial positions of dog and cat
    dog = new Pet(width / 3, height / 2, 'dog');
    cat = new Pet(2 * width / 3, height / 2, 'cat');

    // Define initial food position (outside of canvas)
    foodX = -100;
    foodY = -100;
}

function draw() {
    background(255);

    // Draw pets
    dog.display();
    cat.display();

    // Draw food
    if (foodX !== -100 && foodY !== -100) {
        fill(255, 204, 0);
        ellipse(foodX, foodY, 20, 20);
    }

    // Check if the food is eaten by the pet
    if (dist(dog.x, dog.y, foodX, foodY) < 30 && !fedDog) {
        fedDog = true;
        redirectToEarlyAccessPage();
    }

    if (dist(cat.x, cat.y, foodX, foodY) < 30 && !fedCat) {
        fedCat = true;
        redirectToEarlyAccessPage();
    }
}

function mousePressed() {
    // If the dog is clicked, move the food to its position
    if (dist(mouseX, mouseY, dog.x, dog.y) < 50 && !fedDog) {
        foodX = dog.x;
        foodY = dog.y;
    }

    // If the cat is clicked, move the food to its position
    if (dist(mouseX, mouseY, cat.x, cat.y) < 50 && !fedCat) {
        foodX = cat.x;
        foodY = cat.y;
    }
}

// Pet class to handle dog and cat display
class Pet {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    display() {
        if (this.type === 'dog') {
            fill(150, 75, 0); // Dog color
            ellipse(this.x, this.y, 100, 100); // Simplified dog representation
        } else if (this.type === 'cat') {
            fill(100, 100, 255); // Cat color
            ellipse(this.x, this.y, 80, 80); // Simplified cat representation
        }
    }
}

// Redirect user to early access page after feeding
function redirectToEarlyAccessPage() {
    setTimeout(function () {
        window.location.href = 'https://your-early-access-link.com'; // Change this to your actual link
    }, 1000); // 1 second delay for effect
}
