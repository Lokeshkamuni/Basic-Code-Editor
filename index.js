
function  run(){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let output = document.getElementById("output").contentDocument;

    let combinedCode = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Live Preview</title>
                    <style>${css}
                    </style>
                </head>
                <body>
                    ${html}
                    <script>${js}<\/script>
                </body>
                </html>
            `;

            // Write the combined code to the output iframe
            output.open();
            output.write(combinedCode);
            output.close();
}