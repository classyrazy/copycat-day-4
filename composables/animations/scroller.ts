import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'


let lenis: Lenis;
export const initSmoothScrolling = () => {
    lenis = new Lenis({
        lerp: 0.5,
        normalizeWheel: true,
        smoothWheel: true,
        // smoothTouch: true,
        // syncTouchLerp:  0.5,
    });

    lenis.on('scroll', () => ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const scrollFn = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
};

export const basicSmoothScroll = () => {
    const lenis = new Lenis({
        lerp: 0.5,
        normalizeWheel: true,
        smoothWheel: true,
        wrapper: document.querySelector('main') as HTMLElement,
        
    })

    lenis.on('scroll', (e: any) => {
        console.log(e)
        ScrollTrigger.update()
    })
}
export const scrollTo = (target: HTMLElement | string) => {
    if (typeof target === 'string') {
        let targetEl: HTMLElement | null = document.querySelector(target);
        if (!targetEl) return;
        lenis.scrollTo(targetEl);
    } else {
        lenis.scrollTo(target);
    }
}