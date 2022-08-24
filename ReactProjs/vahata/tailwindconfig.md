const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    space: ['responsive', 'direction'],
  },
  theme: {
    screens: {
      xs: '340px',
      sm: '500px',
      smx: '586px',
      md: '768px',
      lg: '976px',
      lgmx: '1270px',
      lgx: '1340px',
      xl: '1420px',
      xml: '1500px',
      xxl: '1925px',
    },
    colors: {
      dark: 'black',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      red: '#D25C78',
      blueContactUsHeader: '#4e47f9',
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        mr: '51px',
      },
      colors: {
        'header-blue': '#4E47F9',
        'contact-bg': '#f4f3fd',
        'contact-header': '#4e47f9',
        'icon-bg': '#4E47F9',
        'button-footer-bg': '#4e47f9',
        success: '#7AD17C',
        red: '#D25C78',
        blue: '#01559A',
        'brown-bg': '#E5E5E5',
        azure: '#E2F7F9',
      },
      text: {
        medium: 'md:text-xl',
        large: 'lg:text-2xl',
      },
      boxShadow: {
        '4xl': '0px 0px 4px #00000040',
      },
      height: {
        header: '95px',
        banner: '780px',
        card: '480px',
        cardDesc: '136px',
      },
      minHeight: {
        'screen-50': '50vh',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        '2-auto': 'auto auto',
        '4-auto': 'auto auto auto auto',
        '4-auto-1fr': 'auto auto auto auto 1fr',
      },

      gridTemplateRows: {
        '1fr': '1fr',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}
