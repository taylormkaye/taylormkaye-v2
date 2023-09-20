export const displayNavLogo = () => {
    if (isInViewport(document.getElementById('name-container'))) {
        document
            .getElementById('top-nav__logo')
            ?.classList.remove('top-nav__visible');
    } else {
        document
            .getElementById('top-nav__logo')
            ?.classList.add('top-nav__visible');
    }
};

export const isInViewport = (element: HTMLElement | null) => {
    const rect = element?.getBoundingClientRect();
    if (rect) {
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};
