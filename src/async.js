// // Target: ES2015^
// async function delay(ms: number): Promise<void> {
//     return new Promise<void>(resolve => {
//       setTimeout(resolve, ms);
//     });
//   }
//   async function main() {
//     const ms = 1000;
//     console.log(`Waiting for ${ms}ms...`);
//     await delay(ms);
//     console.log("Done!");
//   }
//   main();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        debugger;
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Mr. David');
var button = document.createElement('button');
button.textContent = 'Say Hello';
button.click = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
//# sourceMappingURL=async.js.map