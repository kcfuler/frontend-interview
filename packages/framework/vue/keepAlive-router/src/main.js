"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
require("./style.css");
const App_vue_1 = __importDefault(require("./App.vue"));
const route_1 = __importDefault(require("./route"));
(0, vue_1.createApp)(App_vue_1.default).use(route_1.default).mount("#app");
