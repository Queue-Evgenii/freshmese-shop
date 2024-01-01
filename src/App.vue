<template>
  <router-view />
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Poppins:wght@400;500;700&display=swap');
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
*{
	padding: 0;
	margin: 0;
	border: 0;
}
body{
	font-family: "Poppins";
	font-size: 14px;
	margin: 0;
	width: 100%;
	line-height: 16px;
	color: #151515;
	overflow-x: hidden;
}
._container{
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 45px;
  overflow: hidden;
	@media(max-width: 420px) {
		padding: 0 20px;
	}
}
._cross{
	height: 30px;
	width: 30px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&::after, &::before{
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #151515;
		right: 0;
	}
	&::after{
		transform: rotate(45deg);
	}
	&::before{
		transform: rotate(-45deg);
	}
}
._title{
	font-size: 18px;
	font-weight: 600;
	line-height: 22px;
}
._grand-title{
	font-size: 32px;
	font-weight: 600;
	line-height: 34px;
}
._grid{
	display: grid;
}
._flex{
  display: flex;
}
._flex-wrap{
	flex-wrap: wrap;
}
._f-dir-col{
	flex-direction: column;
}
._aic{ align-items: center; }
._jcsb{ justify-content: space-between; }
._gap-35{ gap: 35px; }
._gap-48{ gap: 48px; }
._label-item{
  color: #6A983C;
}
._p-16{
  padding: 16px;
}
._text-nowrap{
	white-space: nowrap;
}
._input-none{ display: none; }
.quantity-marker{
	display: inline-block;
	padding: 0 8px;
	font-size: 12px;
	font-weight: 600;
	line-height: 14px;
	border-radius: 12px;
	color: #6A983C;
	background-color: #F4F8EC;
}
.content-row{
	display: flex;
	gap: 64px;
	width: 100%;
	padding: 60px 0;
}
.content{
	flex: 1 1 auto;
}
.sidebar {
	flex: 0 0 155px;
}
@media(max-width: 620px) {
	.content-row {
		flex-wrap: wrap;
	}
	.sidebar {
		flex: 1 1 100%;
		text-align:center;
	}
	.more-wrapper{
		margin: 0 auto;
	}
}
</style>
