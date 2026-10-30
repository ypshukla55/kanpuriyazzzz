const counters = document.querySelectorAll('[data-target]');

const animateCounter = (element) => {
  const rawTarget = element.dataset.target;

  if (!rawTarget || Number.isNaN(Number(rawTarget))) {
    return;
  }

  const target = Number(rawTarget);
  const duration = 1400;
  const start = performance.now();

  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(update);
};

counters.forEach((counter) => animateCounter(counter));
