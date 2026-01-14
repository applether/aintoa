import mediumZoom from 'https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/dist/medium-zoom.esm.js'

document.addEventListener('DOMContentLoaded', () => {
    mediumZoom('.article-post img', {
        margin: 24,
        background: 'rgba(255, 255, 255, 0.9)',
        scrollOffset: 0,
    })
})