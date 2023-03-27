<template>
  <router-view />
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Poppins:wght@400;500;700&display=swap');
body{
  font-family: "Poppins";
  font-size: 14px;
  margin: 0;
  width: 100%;
  line-height: 16px;
  overflow-x: hidden;
}
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus, :active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{
  height: 100%;
  width: 100%;
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;background: inherit;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none}
ul li{list-style: none}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
a{color: inherit;}
._container{
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 45px;
  overflow-x: hidden;
}
._flex{
  display: flex;
}
._gap-35{
  gap: 35px;
}
._label-item{
  color: #6A983C;
}
._p-16{
  padding: 16px;
}
*{
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
