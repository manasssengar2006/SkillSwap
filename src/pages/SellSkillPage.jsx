import { useState } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "../data/categories";

export default function SellSkillPage({ setPage, addSkill }) {

  const [form, setForm] = useState({
    title: "",
    category: "coding",
    price: "",
    delivery: "",
    description: "",
    tags: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newSkill = {
      id: Date.now(),
      name: "You",
      avatar: "YS",
      college: "Your College",
      rating: 5,
      ...form,
      price: Number(form.price),
      tags: form.tags.split(",").map(t => t.trim())
    };

    addSkill(newSkill);

    setPage("browse");
  }

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 max-w-3xl mx-auto px-6"
    >

      <h1 className="text-3xl font-bold mb-8">
        🚀 Sell Your Skill
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6"
      >

        {/* Title */}
        <div>
          <label className="text-sm text-gray-400">
            Skill Title
          </label>

          <input
            required
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            placeholder="Fix React bugs in 24hrs"
            value={form.title}
            onChange={(e)=>setForm({...form,title:e.target.value})}
          />
        </div>


        {/* Category */}
        <div>

          <label className="text-sm text-gray-400">
            Category
          </label>

          <select
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            value={form.category}
            onChange={(e)=>setForm({...form,category:e.target.value})}
          >

          {CATEGORIES.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.icon} {cat.label}
            </option>
          ))}

          </select>

        </div>


        {/* Price */}
        <div>
          <label className="text-sm text-gray-400">
            Price (₹)
          </label>

          <input
            type="number"
            required
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            placeholder="199"
            value={form.price}
            onChange={(e)=>setForm({...form,price:e.target.value})}
          />
        </div>


        {/* Delivery */}
        <div>
          <label className="text-sm text-gray-400">
            Delivery Time
          </label>

          <input
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            placeholder="24 hrs"
            value={form.delivery}
            onChange={(e)=>setForm({...form,delivery:e.target.value})}
          />
        </div>


        {/* Description */}
        <div>
          <label className="text-sm text-gray-400">
            Description
          </label>

          <textarea
            rows="4"
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            placeholder="Explain what buyers will get..."
            value={form.description}
            onChange={(e)=>setForm({...form,description:e.target.value})}
          />
        </div>


        {/* Tags */}
        <div>
          <label className="text-sm text-gray-400">
            Tags (comma separated)
          </label>

          <input
            className="w-full mt-1 bg-black/40 border border-white/10 rounded-lg p-3"
            placeholder="React, Node, Debugging"
            value={form.tags}
            onChange={(e)=>setForm({...form,tags:e.target.value})}
          />
        </div>


        {/* Buttons */}
        <div className="flex gap-4">

          <button
            type="submit"
            className="bg-emerald-400 text-black px-6 py-2 rounded-lg font-semibold"
          >
            Publish Skill
          </button>

          <button
            type="button"
            onClick={()=>setPage("home")}
            className="border border-white/20 px-6 py-2 rounded-lg"
          >
            Cancel
          </button>

        </div>

      </form>

    </motion.div>
  );
}