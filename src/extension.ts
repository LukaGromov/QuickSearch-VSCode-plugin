import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    
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