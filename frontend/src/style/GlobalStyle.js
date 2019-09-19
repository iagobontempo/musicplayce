import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Righteous', cursive;
        font-size: 14px;
        background-color: #f7f7f7;
        color: #fff;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`