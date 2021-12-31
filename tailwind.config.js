module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'signupbutton':'#FF7143',
            primary:{
                'lightpink':'#FFEBF8',
                'darkpink':'#EB0090',
            },
            secondary:{
              'lightdark':'#E5E5E5'
            },
            'active':'5px solid #EB0090'
        },
        fontSize:{
            'exs':'.625rem'
        },
        width:{
          '90':'21.625rem',
          '30':'8.75rem',
        }
      },
    },
    plugins: [],
  }