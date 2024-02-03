export const stylesCarBrand = {
  control: styles => ({
    ...styles,
    width: '224px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '6px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
    fontWeight: 500,
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
      fontFamily: 'Manrope',
      backgroundColor: 'white',
      fontWeight: 500,
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      width: '9px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
    fontWeight: 500,
  }),
};

export const stylesPriceRange = {
  control: styles => ({
    ...styles,
    width: '135px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '6px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
    fontWeight: 500,
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
      fontFamily: 'Manrope',
      backgroundColor: 'white',
    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      width: '9px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
    fontWeight: 500,
  }),
};
