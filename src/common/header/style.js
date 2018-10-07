import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
position: relative;
height: 56px;
border: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({href: '/'})`
position: absolute;
top: 0;
left: 0;
display: block;
width: 100px;
height: 56px;
background: url(${LogoPic});
background-size: contain;
`

export const Nav = styled.div`
height: 100%;
width: 960px;
margin: 0 auto;
`

export const NavItem = styled.div`
line-height: 38px;
margin-top: 9px;
padding: 0 15px;
color: #333;
&.left {
  float: left;
  margin-right: 20px;
}
&.right {
  float: right;
  margin-left: 20px;
  color: #969696;
}
&.active {
  color: #ea6f5a;
}
`

export const SearchWrapper = styled.div`
position: relative;
float: left;
.iconfont {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  color: #C2D0C9;
  &.focused {
    color: #fff;
    background: #777;
  }
}
`

export const NavSearch = styled.input.attrs({
  placeholder: 'serach'
})`
line-height: 38px;
margin-top: 9px;
padding: 0 30px 0 25px;
width: 160px;
height: 38px;
font-size: 14px;
border: 1px solid #eee;
border-radius: 40px;
background-color: #eee;
outline: none;
&::placeholder {
  color: #C2D0C9;
}
&.focused {
  width: 240px;
}
&.slide-enter,
&.slide-exit {
  transition: all .2s ease-out;
}
&.slide-enter-active {
  width: 240px;
}
&.slide-exit-active {
  width: 160px;
}
`

export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
height: 56px;
`

export const Button = styled.div`
float: right;
margin-top: 9px;
margin-right: 20px;
padding: 0 20px;
line-height: 38px;
border-radius: 20px;
border: 1px solid #ec6149;
&.reg {
  color: #ea6f5a;
}
&.writting {
  color: #fff;
  background: #ea6f5a;
}
`