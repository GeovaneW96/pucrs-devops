"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const openApi_1 = require("./services/openApi");
const app = (0, express_1.default)();
const port = 80;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const basePrompt = `Given that today is ${new Date()}, is it a good idead to deploy code to production?`;
    const prompt = `${basePrompt} Return only sarcastic responses`;
    const params = {
        prompt
    };
    const response = yield openApi_1.OpenApiService.chatWithGpt(params);
    res.send(`<h3>${basePrompt}</h3><br>${response}`);
}));
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map