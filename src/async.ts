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

class Greeter {
    
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet() {
        debugger;
        return `Hello ${this.greeting}`
    }
}

let greeter = new Greeter('Mr. David');
let button = document.createElement('button');
button.textContent = 'Say Hello';
button.click = function(){
    alert(greeter.greet());
}
document.body.appendChild(button);