import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import CartPage from "./pages/CartPage";
import SellSkillPage from "./pages/SellSkillPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { INITIAL_SKILLS } from "./Data/skills.js";

export default function App(){

const [page,setPage] = useState("home");
const [role,setRole] = useState(null);
const [user,setUser] = useState(null);

const [skills,setSkills] = useState(INITIAL_SKILLS);
const [cartItems,setCartItems] = useState([]);


/* -----------------------------
Load user from localStorage
------------------------------ */

useEffect(()=>{

const savedUser = localStorage.getItem("user");

if(savedUser){
setUser(JSON.parse(savedUser));
}

},[]);


/* -----------------------------
Add skill (seller)
------------------------------ */

function addSkill(skill){

setSkills(prev => [skill,...prev]);

}


/* -----------------------------
Add to cart
Requires login
------------------------------ */

function addToCart(skill){

if(!user){
setPage("login");
return;
}

setCartItems(prev => [...prev,skill]);

}


/* -----------------------------
Remove from cart
------------------------------ */

function removeFromCart(id){

setCartItems(prev =>
prev.filter(item => item.id !== id)
);

}


return(

<div className="min-h-screen bg-black text-white">


{/* Navbar */}

<Navbar
setPage={setPage}
cartItems={cartItems}
page={page}
user={user}
setUser={setUser}
/>


{/* Page Transitions */}

<AnimatePresence mode="wait">


{/* HOME */}

{page === "home" && (

<PageWrapper key="home">

<HomePage setPage={setPage}/>

</PageWrapper>

)}



{/* BROWSE */}

{page === "browse" && (

<PageWrapper key="browse">

<BrowsePage
skills={skills}
addToCart={addToCart}
/>

</PageWrapper>

)}



{/* CART */}

{page === "cart" && (

<PageWrapper key="cart">

<CartPage
cartItems={cartItems}
removeFromCart={removeFromCart}
setPage={setPage}
/>

</PageWrapper>

)}



{/* SELL SKILL */}

{page === "sell" && (

<PageWrapper key="sell">

<SellSkillPage
setPage={setPage}
addSkill={addSkill}
/>

</PageWrapper>

)}



{/* LOGIN */}

{page === "login" && (

<PageWrapper key="login">

<LoginPage
role={role}
setUser={(u)=>{

setUser(u);
localStorage.setItem("user",JSON.stringify(u));

}}
setPage={setPage}
/>

</PageWrapper>

)}



{/* REGISTER */}

{page === "register" && (

<PageWrapper key="register">

<RegisterPage
role={role}
setPage={setPage}
/>

</PageWrapper>

)}


</AnimatePresence>

</div>

)

}