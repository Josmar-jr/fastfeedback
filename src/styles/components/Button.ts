export const Button = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: 'md',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizes: {
    sm: {
      fontSize: '14px',
      px: 6,
      h: '42px',
    },
    md: {
      fontSize: '16px',
      px: 4,
      h: '48px',
    },
    lg: {
      fontSize: '1.2rem',
      px: 8,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#079CFB',
      bgColor: 'transparent',
      color: 'white',
      _hover: {
        filter: 'brightness(0.9)',
        bgColor: 'transparent',
      },
    },
    solid: {
      bgGradient: 'linear(140.48deg, #079CFB 26.48%, #004CFF 81.67%)',
      color: 'white',
      transition: '0.3s ease',
      _hover: {
        filter: 'brightness(0.9)',
        bgGradient: 'linear(140.48deg, #079CFB 26.48%, #004CFF 81.67%)',
      },
      _focus: {
        filter: 'brightness(0.9)',
        bgGradient: 'linear(140.48deg, #079CFB 26.48%, #004CFF 81.67%)',
      },
      _active: {
        filter: 'brightness(0.9)',
        bgGradient: 'linear(140.48deg, #079CFB 26.48%, #004CFF 81.67%)',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
