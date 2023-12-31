export const IO = (item: HTMLElement, options?: any) => {
    return new Promise((resolve: any) => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resolve();
                }
            });
        }, options);
        observer.observe(item);
    });
};