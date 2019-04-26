import * as wasm from "pulldown-cmark-wasm";

const div = window.document.getElementById("output");
const rendered = wasm.pulldown_cmark_wasm();
div.innerHTML = rendered;
