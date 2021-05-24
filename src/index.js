import {handlers} from "./handlers.js";

var searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", handlers.handleSearch);

