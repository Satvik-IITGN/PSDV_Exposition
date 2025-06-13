document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", function () {
        let codeBlock = this.closest(".code-container").querySelector("pre code"); // Select code block
        let text = codeBlock.innerText.trim(); // Get and trim code text

        navigator.clipboard.writeText(text).then(() => {
            this.innerHTML = '<span class="copy-icon">✅</span> Copied!'; // Show "Copied!" with tick icon
            
            setTimeout(() => {
                this.innerHTML = '<span class="copy-icon">📋</span> Copy'; // Restore clipboard icon and "Copy"
            }, 1500);
        }).catch(err => console.error("Failed to copy:", err));
    });
});
