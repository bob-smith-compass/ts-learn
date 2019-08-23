

const message: string = "TypeScript 3.5.1";

debugger;

console.log(message);
function GetAllBooks() {
    let books = [
        {title: 'JS', author: 'David', available: true},
        {title: 'Webpack', author: 'John', available: true},
        {title: 'CSS', author: 'Crocford', available: false}
    ];
    return books;
}
function LogFirstAvailableBook(books) {
    
    let numberOfBooks = books.length;
    let FirstAvailable = '';
    for (let curBook of books) {

        if(curBook.available) {
            FirstAvailable = curBook.title;
            break;
        }
    }
    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available books: ${FirstAvailable}`);

}
LogFirstAvailableBook(GetAllBooks());

// Target: ES2015^

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

async function delay(ms: number): Promise<void> {
    return new Promise<void>( resolve => {
        setTimeout(resolve, ms);
    })
}
async function main() {
    const ms = 1000;
    console.log(`Waiting for ${ms}ms...`);
    await delay(ms);
    console.log(`Done!`);
}
main();