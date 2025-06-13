document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".run-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let codeBlock = this.nextElementSibling; // The <pre> block
            let code = codeBlock.innerText.trim(); // Extract clean code

            // Find the output container (it should be the next sibling after .code-container)
            let outputContainer = this.closest(".code-container").nextElementSibling;
            if (!outputContainer) {
                console.error("Output container not found.");
                return;
            }

            // Create an iframe to execute the code
            let iframe = document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "500px";
            iframe.style.border = "1px solid black";

            // Clear previous output and append the new iframe
            outputContainer.innerHTML = "";
            outputContainer.appendChild(iframe);

            let doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();

            // Inject the extracted HTML into the iframe
            doc.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.24.0/cytoscape.min.js"></script>
                    <style> #cy { width: 100%; height: 500px; border: 1px solid black; } </style>
                </head>
                <body>
                    ${code} 
                </body>
                </html>`);
            doc.close();
        });
    });
});
