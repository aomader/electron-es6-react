# electron-es6-react

A simple boilerplate app to demonstrate how to use [ES6] and [React] with
[Electron]. It uses [Babel] to automatically transpile ES6 and JSX code,
without depending on any package manager besides `npm`.

## How?

The Node and Electron binaries both take a parameter `-r` that automatically
requires a module before the rest of the code.  The `npm start` script is
modified using this, which registers Babel and loads the entry point `main.js`.

The renderer entry point `index.html` does basically the same, but loads the
`scripts/main.js` file, which renders the `views/main.jsx` component into the `body`.

## Installation

```bash
git clone https://github.com/b52/electron-es6-react.git
cd electron-es6-react
npm install
npm start
```

## Debugging

### With Chrome Developer Tools

- `npm run brk`; 
- Open `chrome://inspect` in Chrome Browser; 
- Press "Configure" button and add `localhost:5858`; 
- Then look to Remote Target section, there must applications link appears. Click it. This opens chrome developer tools;
- In Dev Tools go to `Sources` tab and `Add (source) folder to workspace`. Add breakpoint and F8 (continue execution).

### Vith Visual Studio Code

Debug config `.vscode/launch.json` is taken from [vscode-recipes](https://github.com/Microsoft/vscode-recipes/tree/master/Electron).

Electron application has main and rendering processes. Main executed in node environment and rendering - in browser. So there are two debug configurations in Debug panel (Ctrl+Shift+D) respectively: `Electron: Main` and `Electron: Renderer`. You can run Main and then attach Renderer or you can run both by choosing  `Electron: All` compound.


[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io

