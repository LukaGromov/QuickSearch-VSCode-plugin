"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('simple-quick-search.stackoverflow', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('No editor open!');
            return;
        }
        const selection = editor.selection;
        const text = editor.document.getText(selection);
        if (!text) {
            vscode.window.showWarningMessage('Please select some text first!');
            return;
        }
        const encodedText = encodeURIComponent(text);
        const stackOverflowUrl = `https://stackoverflow.com/search?q=${encodedText}`;
        vscode.env.openExternal(vscode.Uri.parse(stackOverflowUrl));
        vscode.window.showInformationMessage(`Searching Stack Overflow for: "${text}"`);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map