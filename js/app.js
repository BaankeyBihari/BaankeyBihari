/**
 * Main application entry point
 * Replaces jQuery-based main.js with modern vanilla JavaScript
 */

'use strict';

// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const preloder = document.getElementById('preloder');

    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 400);
    }

    if (preloder) {
        setTimeout(() => {
            preloder.style.opacity = '0';
            setTimeout(() => preloder.style.display = 'none', 400);
        }, 400);
    }
});

// Background image setter
document.addEventListener('DOMContentLoaded', () => {
    // Set background images
    const bgElements = document.querySelectorAll('.set-bg');
    bgElements.forEach(element => {
        const bg = element.dataset.setbg;
        if (bg) {
            element.style.backgroundImage = `url(${bg})`;
        }
    });

    // Initialize progress bars
    initProgressBars();

    // Initialize language progress
    initLanguageProgress();

    // Initialize circle progress (if library is loaded)
    if (typeof CircleProgress !== 'undefined') {
        initCircleProgress();
    }
});

/**
 * Initialize skill progress bars
 */
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-style');

    progressBars.forEach(bar => {
        const progress = parseInt(bar.dataset.progress) || 0;
        const progWidth = `${progress}/10`;
        const progPercent = Math.min(progress * 10, 100);
        const displayWidth = progress <= 10 ? progWidth : '10/10';

        const barInner = document.createElement('div');
        barInner.className = 'bar-inner';
        barInner.style.width = `${progPercent}%`;

        const span = document.createElement('span');
        span.textContent = displayWidth;

        barInner.appendChild(span);
        bar.appendChild(barInner);
    });
}

/**
 * Initialize language proficiency indicators
 */
function initLanguageProgress() {
    const langProgs = document.querySelectorAll('.lan-prog');

    langProgs.forEach(prog => {
        const progress = parseInt(prog.dataset.lanprogesss) || 0;

        for (let i = 1; i <= 5; i++) {
            const span = document.createElement('span');
            if (i > progress) {
                span.className = 'fade-ele';
            }
            prog.appendChild(span);
        }
    });
}

/**
 * Initialize circle progress animations
 * Note: Requires circle-progress library
 */
function initCircleProgress() {
    const circleConfigs = [
        { id: 'progress1', value: 0.75, fill: '#40424a' },
        { id: 'progress2', value: 0.83, fill: '#40424a' },
        { id: 'progress3', value: 0.75, fill: '#ffffff' },
        { id: 'progress4', value: 0.83, fill: '#ffffff' },
        { id: 'progress5', value: 0.75, fill: '#009fff' },
        { id: 'progress6', value: 0.83, fill: '#009fff' },
    ];

    circleConfigs.forEach(config => {
        const element = document.getElementById(config.id);
        if (element && element.circleProgress) {
            element.circleProgress({
                value: config.value,
                size: 175,
                thickness: 2,
                fill: config.fill,
                emptyFill: 'rgba(0, 0, 0, 0)',
            });
        }
    });
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });
    });
});

export { initProgressBars, initLanguageProgress, initCircleProgress };
