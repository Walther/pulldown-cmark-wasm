# pulldown-cmark-wasm

Just a quick demo of how easy it is to use pulldown-cmark in a wasm context! This took me about 20min to do, total.

- `cargo init`
- add dependencies to `Cargo.toml`
- copy paste the simple example from pulldown-cmark `examples/`
- `wasm-pack build`
- edit `Cargo.toml` to have the lib types
- rename `src/main.rs` to `src/lib.rs`
- `wasm-pack build` again
- `npm init wasm-app www`, `cd www`, `npm install`, `cd ..`
- edit the rust code and the js code so that the result gets rendered in the html
- `npm link`
- `cd www`, `npm link pulldown-cmark-wasm`, `npm run start`
- check in the browser
- `webpack`, rsync the `dist/` contents to my personal site
- see the end result here: <https://walther.guru/temp/pulldown-cmark-wasm/>

