import styles from './ZoomableImage.module.css';

class ImageZoom {
    private img: HTMLImageElement;
    private lens: HTMLDivElement;
    private result: HTMLDivElement;
    private cx: number;
    private cy: number;

    constructor(imgID: string, resultID: string) {
        this.img = document.getElementById(imgID) as HTMLImageElement;
        this.result = document.getElementById(resultID) as HTMLDivElement;

        if (!this.img || !this.result) {
            throw new Error('Image or result element not found');
        }

        this.lens = document.createElement("div");
        this.lens.setAttribute("class", styles.imgZoomLens);  // Using CSS Module class name
        this.img.parentElement?.insertBefore(this.lens, this.img);

        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;

        this.result.style.backgroundImage = `url('${this.img.src}')`;
        this.result.style.backgroundSize = `${this.img.width * this.cx}px ${this.img.height * this.cy}px`;

        this.lens.addEventListener("mousemove", this.moveLens.bind(this));
        this.img.addEventListener("mousemove", this.moveLens.bind(this));
        this.lens.addEventListener("touchmove", this.moveLens.bind(this));
        this.img.addEventListener("touchmove", this.moveLens.bind(this));

        this.img.addEventListener("mouseenter", this.showLens.bind(this));
        this.img.addEventListener("mouseleave", this.hideLens.bind(this));
        this.lens.addEventListener("mouseenter", this.showLens.bind(this));
        this.lens.addEventListener("mouseleave", this.hideLens.bind(this));
    }

    private moveLens(e: MouseEvent | TouchEvent): void {
        e.preventDefault();
        const pos = this.getCursorPos(e);
        let x = pos.x - (this.lens.offsetWidth / 2);
        let y = pos.y - (this.lens.offsetHeight / 2);

        if (x > this.img.width - this.lens.offsetWidth) { x = this.img.width - this.lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > this.img.height - this.lens.offsetHeight) { y = this.img.height - this.lens.offsetHeight; }
        if (y < 0) { y = 0; }

        this.lens.style.left = `${x}px`;
        this.lens.style.top = `${y}px`;
        this.result.style.backgroundPosition = `-${x * this.cx}px -${y * this.cy}px`;
    }

    private getCursorPos(e: MouseEvent | TouchEvent): { x: number, y: number } {
        const a = this.img.getBoundingClientRect();
        let x = 0, y = 0;

        if (e instanceof MouseEvent) {
            x = e.pageX - a.left;
            y = e.pageY - a.top;
        } else if (e instanceof TouchEvent) {
            x = e.touches[0].pageX - a.left;
            y = e.touches[0].pageY - a.top;
        }

        x = x - window.scrollX;
        y = y - window.scrollY;
        return { x: x, y: y };
    }

    private showLens(): void {
        this.lens.style.display = 'block';
    }

    private hideLens(): void {
        this.lens.style.display = 'none';
    }
}

export default ImageZoom;



