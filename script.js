document.addEventListener('DOMContentLoaded', function() {
    const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
      mode: 'htmlmixed',
      theme: 'monokai',
      lineNumbers: true
    });
  
    const cssEditor = CodeMirror.fromTextArea(document.getElementById('css-code'), {
      mode: 'css',
      theme: 'monokai',
      lineNumbers: true
    });
  
    const jsEditor = CodeMirror.fromTextArea(document.getElementById('js-code'), {
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true
    });
  
    document.getElementById('run-btn').addEventListener('click', function() {
      const htmlCode = htmlEditor.getValue();
      const cssCode = cssEditor.getValue();
      const jsCode = jsEditor.getValue();
      const outputFrame = document.getElementById('output-frame');
      const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
  
      outputDocument.open();
      outputDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (error) {
              document.body.innerHTML += '<div style="color: red; font-weight: bold;">JavaScript Error: ' + error.message + '</div>';
            }
          <\/script>
        </body>
        </html>
      `);
      outputDocument.close();
    });
  });
  