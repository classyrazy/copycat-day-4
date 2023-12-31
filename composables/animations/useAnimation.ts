import { gsap } from "gsap"
import SplitType from 'split-type';
import { IO } from './observer'

export const useAnimation = () => {
    function animateFadeTextHidden(el: HTMLElement | string, trigger: HTMLElement | string) {
        let elems: NodeListOf<HTMLElement>;
        if (typeof el === 'string') {
            elems = document.querySelectorAll(el) as NodeListOf<HTMLElement>
        }
        let triggers: NodeListOf<HTMLElement>;
        if (typeof trigger === 'string') {
            triggers = document.querySelectorAll(trigger) as NodeListOf<HTMLElement>
        }
        // const tl = gsap.timeline({ paused: true })
        elems.forEach((el, idx) => {
            const split = new SplitType(el, { types: 'words' }) as any;
            const splittedText = new SplitType(split.words, { types: 'words' });
            IO(triggers[idx], {
                threshold: 0.7
            })
                .then(() => {
                    gsap.to(splittedText.words, {
                        y: 0,
                        opacity: 1,
                        // autoAlpha: 1,
                        stagger: 0.08,
                        duration: 0.6,
                        transformStyle: "preserve-3d",
                        ease: 'power3.inOut'
                        // ease: "easeIn",
                    });
                })
        })
    }

    function animateFadeElem(el: HTMLElement | string, trigger: HTMLElement | string) {
        let elems: NodeListOf<HTMLElement>;
        if (typeof el === 'string') {
            elems = document.querySelectorAll(el) as NodeListOf<HTMLElement>
        }
        let triggers: NodeListOf<HTMLElement>;
        if (typeof trigger === 'string') {
            triggers = document.querySelectorAll(trigger) as NodeListOf<HTMLElement>
        }
        // const tl = gsap.timeline({ paused: true })
        elems.forEach((el, idx) => {
            IO(triggers[idx], {
                threshold: 1
            })
                .then(() => {
                    gsap.to(el, {
                        opacity: 1,
                        // autoAlpha: 1,
                        duration: 0.5,
                    });
                })
        })
    }

    function animatePadAndHand(pad: string, hand: string, trigger: string) {
        const padEl = document.querySelector(pad) as HTMLElement;
        const handEl = document.querySelector(hand) as HTMLElement;
        const triggerEl = document.querySelector(trigger) as HTMLElement;
        IO(triggerEl)
            .then(() => {
                gsap.to(padEl, {
                    // opacity: 1,
                    y: 0,
                    duration: .8,
                    ease: "circ.easeOut"
                });
                gsap.to(handEl, {
                    // opacity: 1,
                    y: 0,
                    duration: .5,
                    ease: "circ.easeOut",
                    delay: .5
                })
            })

    }

    function animateFadeUp(el: HTMLElement | string, trigger: HTMLElement | string) {
        let elems: NodeListOf<HTMLElement>;
        if (typeof el === 'string') {
            elems = document.querySelectorAll(el) as NodeListOf<HTMLElement>
        }
        let triggers: NodeListOf<HTMLElement>;
        if (typeof trigger === 'string') {
            triggers = document.querySelectorAll(trigger) as NodeListOf<HTMLElement>
        }
        // const tl = gsap.timeline({ paused: true })
        elems.forEach((el, idx) => {
            IO(triggers[idx])
                .then(() => {
                    gsap.to(el, {
                        opacity: 1,
                        y:0,
                        autoAlpha: 1,
                        duration: 1,
                    });
                })
        })
    }
    function animateFadeDown(el: HTMLElement | string, trigger: HTMLElement | string) {
        let elems: NodeListOf<HTMLElement>;
        if (typeof el === 'string') {
            elems = document.querySelectorAll(el) as NodeListOf<HTMLElement>
        }
        let triggers: NodeListOf<HTMLElement>;
        if (typeof trigger === 'string') {
            triggers = document.querySelectorAll(trigger) as NodeListOf<HTMLElement>
        }
        // const tl = gsap.timeline({ paused: true })
        elems.forEach((el, idx) => {
            IO(triggers[idx])
                .then(() => {
                    gsap.to(el, {
                        opacity: 1,
                        y:0,
                        autoAlpha: 1,
                        duration: 1,
                    });
                })
        })
    }
    animateFadeTextHidden('.c-text', '.c-text-trigger')
    animateFadeElem('.fade-in', '.fade-in-trigger')
    animatePadAndHand('.pad', '.hand', '.pad-trigger')
    animateFadeUp('.fade-up', '.fade-up-trigger')
    animateFadeDown('.fade-down', '.fade-down-trigger')
    

}