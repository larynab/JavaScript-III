/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(property) {
  this.createdAt = property.createdAt;
  this.dimensions = property.dimensions;
  this.destroy = function() {
    return `${this.name} was removed from the game`
  };
};
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
  this.takeDamage = function() {
    return `${this.name} took damage.`;
  };
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(stats){
  GameObject.call(this, stats);
  CharacterStats.call(this, stats);
  this.team = stats.team;
  this.weapons = stats.weapons;
  this.language = stats.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  };
}; 
 /*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Stretch Villain constructor
/*Give the Hero and Villains different methods that could be used to 
remove health points from objects which could result in destruction if health gets to 0 or drops below 0;*/
function Villain(mod){
  Humanoid.call(this, mod);
  this.poisonDagger = function() {
    return `${this.name} throws a deadly poisoned dagger! Damage for 10 health points.`;
  };
};

function Hero(mod){
  Humanoid.call(this, mod);
  this.charmingEyes = function() {
    return `${this.name} stares deeply into your eyes, you feel feverish and overwhelmed, weakened.`;
  };
};

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  // Stretch * Create two new objects, one a villain and one a hero and fight it out with methods!
 const paul = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 5,
  name: "Super Paul",
  team: 'Sky Kingdom',
  weapons: [
    'Fists',
    'Iron Muscles',
  ],
  language: 'English'
});
 
 const eric = new Villain({
   createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  healthPoints: 7,
  name: "Exilimor",
  team: 'Nether Warp',
  weapons: [
    'Electron Whip',
    'Plasma Flak Cannon',
  ],
  language: 'Enrwiw'
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(paul.charmingEyes()); // ${this.name} stares deeply into your eyes, you feel feverish and overwhelmed, weakened.
  console.log(eric.poisonDagger()); // ${this.name} throws a deadly poisoned dagger! Damage for 10 health points.
  console.log(paul.destroy()); // Super Paul was removed from game.

  // Stretch task: Complete 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  // Complete