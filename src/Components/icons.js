import React from "react";

import {search} from 'react-icons-kit/fa/search'
import { withBaseIcon } from 'react-icons-kit'
import {user} from 'react-icons-kit/icomoon/user'
import {navicon} from 'react-icons-kit/ionicons/navicon'

import shopcart from '../assets/shoppingcart.png'


const IconEditer = 
    withBaseIcon({ size: 18, style: {color: 'black'}})

const IconEditer2 = 
    withBaseIcon({ size: 26, style: {color: '#ffd233'}})

const IconEditer3 = 
    withBaseIcon({ size: 15, style: {color: '#ffd233'}})



export const SearchIcon = ()=><IconEditer icon={search}/>
export const UserIcon = ()=><IconEditer icon={user}/>
export const NavIcon =()=><IconEditer2 icon={navicon}/>
export const ShopCart = ()=><IconEditer3 icon = {shopcart}/>