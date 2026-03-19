export default class HowToPlay {
    constructor() {
        this.currentSlideIndex = 0;
        this.dialogEl = document.querySelector('#dialog-how-to-play');
        this.dotsContainer = this.dialogEl.querySelector('.dot-indicators');
        this.slides = this.dialogEl.querySelectorAll('.slide');

        this.generateDots();

        this.dots = this.dialogEl.querySelectorAll('.dot');
        this.btnClose = this.dialogEl.querySelector('#btn-close-how-to-play');
        this.btnPrev = this.dialogEl.querySelector('#btn-prev-slide');
        this.btnNext = this.dialogEl.querySelector('#btn-next-slide');

        this.btnClose.addEventListener('click', () => {
            this.closeDialog();
        });

        this.btnPrev.addEventListener('click', () => {
            if (this.currentSlideIndex == 0) return;
            this.currentSlideIndex -= 1;
            this.updateSlides();
        })

        this.btnNext.addEventListener('click', () => {
            if (this.currentSlideIndex == this.slides.length - 1) return;
            this.currentSlideIndex += 1;
            this.updateSlides();
        })

        this.dotsContainer.addEventListener('click', (e) => {
            if (!e.target.classList.contains('dot')) return;
            const targetSlide = parseInt(e.target.dataset.slide);
            if (this.currentSlideIndex === targetSlide) return;
            this.currentSlideIndex = targetSlide;
            this.updateSlides();
        })
    }

    openDialog() {
        this.currentSlideIndex = 0;
        this.updateSlides();
        this.dialogEl.showModal();
    }

    closeDialog() {
        this.dialogEl.close();
    }

    generateDots() {
        this.dotsContainer.innerHTML = ''; 

        this.slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            
            dot.dataset.slide = i;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            
            this.dotsContainer.appendChild(dot);
        });
    }

    updateSlides() {
        this.slides.forEach((el, i) => {
            const isCurrent = this.currentSlideIndex === i;
            el.classList.toggle('active', isCurrent);
            el.classList.toggle('hidden', !isCurrent);
        });

        this.dots.forEach((el, i) => {
            const isCurrent = this.currentSlideIndex === i;
            el.classList.toggle('active', isCurrent);
        });
    }
}