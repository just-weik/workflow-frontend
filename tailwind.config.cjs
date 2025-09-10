module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',  // Add paths based on the framework you chose
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Calibri', 'Arial', 'Helvetica', 'sans-serif'],
            },
            fontSize: {
                'xs': ['10px', '12px'], // default 12px -> 10px
                'sm': ['12px', '16px'], // default 14px -> 12px
                'base': ['14px', '20px'], // default 16px -> 14px
                'lg': ['16px', '24px'], // default 18px -> 16px
                'xl': ['18px', '24px'], // default 20px -> 18px
                '2xl': ['20px', '28px'], // default 24px -> 22px
                '3xl': ['24px', '32px'], // default 30px -> 28px
                '4xl': ['32px', '36px'], // default 36px -> 34px
                '5xl': ['40px', '1'], // default 48px -> 46px
                '6xl': ['52px', '1'], // default 60px -> 58px
                '7xl': ['68px', '1'], // default 72px -> 70px
                '8xl': ['84px', '1'], // default 96px -> 94px
                '9xl': ['108px', '1'], // default 128px -> 126px
            },
        },
    },
    plugins: [],
}