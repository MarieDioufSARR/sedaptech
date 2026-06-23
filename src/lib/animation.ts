export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },

  whileInView: {
    opacity: 1,
  },

  transition: {
    duration: 0.5,
  },

  viewport: {
    once: true,
  },
};

export const slideDown = {
  initial: {
    opacity: 0,
    y: -20,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.5,
    ease: "easeOut" as const,
  },
};

export const slideRight = {
  initial: {
    opacity: 0,
    x: -20,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.5,
    ease: "easeOut" as const,
  },
};

export const slideLeft = {
  initial: {
    opacity: 0,
    x: 20,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.5,
    ease: "easeOut" as const,
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};
