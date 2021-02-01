export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.75,
            },
        }
    }
}

export const slideDown = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: -300,
        transition: {
            duration: 0.75,
        },
    }
}

export const OpenClosed = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
    }
}

export const slideUp = {
    hidden: {
        opacity: 0,
        scale:0.5,
        y: 1000,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: -300,
        transition: {
            duration: 0.75,
        },
    }
}