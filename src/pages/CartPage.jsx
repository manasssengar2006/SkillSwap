import { motion } from "framer-motion";

export default function CartPage({
  cartItems,
  removeFromCart,
  setPage
}) {

  const total = cartItems.reduce((sum,item)=>sum + item.price,0);

  return (

  <motion.div
  initial={{opacity:0,y:40}}
  animate={{opacity:1,y:0}}
  className="pt-24 max-w-5xl mx-auto px-6"
  >

  <h1 className="text-3xl font-bold mb-8">
  🛒 Your Cart
  </h1>

  {cartItems.length === 0 ? (

  <div className="text-center text-gray-400 mt-20">

  <p className="text-lg">Your cart is empty</p>

  <button
  onClick={()=>setPage("browse")}
  className="mt-6 bg-emerald-400 text-black px-6 py-2 rounded-lg"
  >
  Browse Skills
  </button>

  </div>

  ) : (

  <div className="space-y-4">

  {cartItems.map(item => (

  <motion.div
  key={item.id}
  layout
  className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center"
  >

  <div>

  <h3 className="font-semibold text-lg">
  {item.title}
  </h3>

  <p className="text-sm text-gray-400">
  by {item.name}
  </p>

  </div>


  <div className="flex items-center gap-6">

  <p className="text-emerald-400 font-bold">
  ₹{item.price}
  </p>

  <button
  onClick={()=>removeFromCart(item.id)}
  className="text-red-400 hover:text-red-500"
  >
  Remove
  </button>

  </div>

  </motion.div>

  ))}

  {/* TOTAL */}

  <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-center mt-6">

  <h2 className="text-xl font-bold">
  Total
  </h2>

  <p className="text-2xl font-bold text-emerald-400">
  ₹{total}
  </p>

  </div>


  {/* CHECKOUT */}

  <div className="flex justify-end mt-6">

  <button
  className="bg-emerald-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition"
  >
  Proceed to Checkout
  </button>

  </div>

  </div>

  )}

  </motion.div>

  );

}