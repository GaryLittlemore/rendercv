// Default template to populate the editor on first load
const initialMarkdown = `# John Doe
**Software Engineer** | john.doe@email.com | [github.com/johndoe](https://github.com)

## Experience
### Frontend Developer | Tech Corp (2024 - Present)
- Built a high-performance static web app hosted on GitHub Pages.
- Optimized CSS layouts utilizing modern Flexbox and Grid structures.

## Skills
- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Tools:** Git, GitHub, Markdown`;

document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const resumePreview = document.getElementById('resume-preview');
    const themeSelector = document.getElementById('theme-selector');
    const downloadBtn = document.getElementById('download-pdf-btn');

    // 1. Initialize with default content
    markdownInput.value = initialMarkdown;
    updatePreview();

    // 2. Live update preview on input
    markdownInput.addEventListener('input', updatePreview);

    function updatePreview() {
        const rawMarkdown = markdownInput.value;
        // marked.parse() converts Markdown string to HTML string
        resumePreview.innerHTML = marked.parse(rawMarkdown);
    }

    // 3. Handle Theme Switching
    themeSelector.addEventListener('change', (e) => {
        // Remove existing theme classes and apply the selected one
        resumePreview.className = ''; 
        resumePreview.classList.add(e.target.value);
    });

    // 4. Trigger PDF Generation via Browser Print
    downloadBtn.addEventListener('click', () => {
        window.print();
    });
});
