var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var message = "TypeScript 3.5.1";
debugger;
console.log(message);
function GetAllBooks() {
    var books = [
        { title: 'JS', author: 'David', available: true },
        { title: 'Webpack', author: 'John', available: true },
        { title: 'CSS', author: 'Crocford', available: false }
    ];
    return books;
}
function LogFirstAvailableBook(books) {
    var numberOfBooks = books.length;
    var FirstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var curBook = books_1[_i];
        if (curBook.available) {
            FirstAvailable = curBook.title;
            break;
        }
    }
    console.log("Total books: " + numberOfBooks);
    console.log("First available books: " + FirstAvailable);
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
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, ms);
                })];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var ms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ms = 1000;
                    console.log("Waiting for " + ms + "ms...");
                    return [4 /*yield*/, delay(ms)];
                case 1:
                    _a.sent();
                    console.log("Done!");
                    return [2 /*return*/];
            }
        });
    });
}
main();
//# sourceMappingURL=app.js.map