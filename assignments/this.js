/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global(window) binding means that the value of "this" is on a global scope. Meaning one huge container like  
 window or console is operating as a global unit, everything applies to eachother.
* 2. Implicit Binding is where "this" will be assigned to the object left of dot notation. Object is "this".
* 3. New Binding is where within an Object the specific instance/attribute becomes "this" 
 and will be returned by the object.
* 4. Explicit is where "this" is defined through a call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayQuack(sound) {
    console.log(this);
    return sound; 
};
console.log(sayQuack("QUACK"));

// Principle 2

// code example for Implicit Binding
const myPen = {
    pushButton: "(click click)",
    holdingPen: function(name){
        console.log(`${this.pushButton} Hi there user ${name}.`);
    }
};
myPen.holdingPen("Alaj");
// Principle 3

// code example for New Binding
function WeaponA(weaponName){
    this.weaponText = "Alpha Tier";
    this.weaponName = weaponName;
    this.rules = function () {
     console.log(this.weaponText + this.weaponName)
    };
    console.log(this);
};
const swordOfAtlantis = new WeaponA(' Sword of Atlantis');
const axeOfEmbers = new WeaponA(' Axe of Embers');
const daggerObsidian = new WeaponA(' Obsidian Dagger');
swordOfAtlantis.rules();

// Principle 4


// code example for Explicit Binding
swordOfAtlantis.rules.call(axeOfEmbers);
axeOfEmbers.rules.apply(daggerObsidian);

swordOfAtlantis.rules();