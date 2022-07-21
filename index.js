"use strict";
import { Pong } from "./src/pong.js";

window.onload = function() {
    pong = new Pong();
    pong.start();
}