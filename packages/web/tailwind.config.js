module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#f6f6f6',
      secondary: '#cd163f',
      danger: '#e3342f'
    }),
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked']
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked']
    }
  },
  plugins: []
}
