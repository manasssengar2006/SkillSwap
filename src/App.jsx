import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import CartPage from "./pages/CartPage";
import { INITIAL_SKILLS } from "./data/skills";
import SellSkillPage from "./pages/SellSkillPage";

export default function App(){

const[page,setPage]=useState("home")

const[skills,setSkills]=useState(INITIAL_SKILLS)
const removeFromCart = (id) => {
setCartItems(cartItems.filter(item => item.id !== id))
}
const[cartItems,setCartItems]=useState([])
const addSkill = (skill) => {
  setSkills([skill, ...skills]);
};

const addToCart=(skill)=>{

setCartItems([...cartItems,skill])

}

return(

<div>

<Navbar
setPage={setPage}
cartItems={cartItems}
/>

<AnimatePresence mode="wait">

{page==="home" &&

<PageWrapper key="home">
<HomePage setPage={setPage}/>
</PageWrapper>

}
{page==="cart" &&

<PageWrapper key="cart">

<CartPage
cartItems={cartItems}
removeFromCart={removeFromCart}
setPage={setPage}
/>

</PageWrapper>

}

{page==="browse" &&

<PageWrapper key="browse">
<BrowsePage
skills={skills}
addToCart={addToCart}
/>
</PageWrapper>

}
{page==="sell" &&

<PageWrapper key="sell">

<SellSkillPage
setPage={setPage}
addSkill={addSkill}
/>

</PageWrapper>

}

</AnimatePresence>

</div>

)

}