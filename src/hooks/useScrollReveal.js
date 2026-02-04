import { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // When container enters, animate ALL children
                const children = element.querySelectorAll('.reveal-child');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 100}ms`; // Stagger delay
                    child.classList.add('is-visible');
                });

                // Also animate the container itself if it has the class
                if (element.classList.contains('reveal-child')) {
                    element.classList.add('is-visible');
                }

                if (options.once !== false) {
                    observer.unobserve(element);
                }
            }
        }, {
            threshold: 0.1, // Trigger when 10% of container is visible
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, [options]);

    return ref;
};

export default useScrollReveal;
