import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='bg-[hsl(30,54%,90%)]  py-16 px-6 min-h-screen min-w-screen   flex flex-col justify-center items-center    '>
      <div className='bg-white  flex flex-col  items-center rounded-2xl p-4 w-full sm:w-3/4 lg:w-1/2 2xl:w-1/3'>
        <img src='public/images/image-omelette.jpeg' className='rounded-3xl p-4 max-sm:p-0 max-sm:rounded-none w-full  '  ></img>
        <div className='relative left-4 pr-10'>
        <h5 className='font-[outfit-medium] text-2xl '>Simple Omelette Recipe</h5>
        <p className='font-[outfit-thin] text-xs'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className='bg-[hsl(225,30%,92%)] my-10  '>
        <h4 className='font-[outfit-bold] text-sm text-red-500 '>Preparation time</h4>
        <ul className="list-disc pl-5 font-[outfit-thin] text-sm ">
          <li><span  className="font-[outfit-bold]" >Total:</span> Approximately 10 minutes</li>
          <li><span  className="font-[outfit-bold]" >Preparation:</span> 5 minutes</li>
          <li><span  className="font-[outfit-bold]" >Cooking: </span> 5 minutes</li>
        </ul>
        </div>
        <h3 className='font-[outfit-bold] text-xl mb-3'>Ingredients</h3>
        <ul className='list-disc pl-5 font-[outfit-thin] text-xs mb-4'>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
        <h3  className='font-[outfit-bold] text-xl mb-3 border-t border-black'>Instructions</h3>
        <ul className='list-disc pl-5 font-[outfit-thin] text-sm mb-4'>
          <p className='font-[Outface] text-xs'><span className='font-[outfit-bold]'>1.Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
            You can add a tablespoon of water or milk for a fluffier texture.</p>
          <p className='font-[Outface] text-xs'><span className='font-[outfit-bold]'>2.Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</p>
          <p className='font-[Outface] text-xs'><span className='font-[outfit-bold]'>3.Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
            the eggs evenly coat the surface.
          </p>
          <p className='font-[Outface] text-xs'><span className='font-[outfit-bold]'>4.Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
            middle, sprinkle your chosen fillings over one half of the omelette.
          </p>
          <p className='font-[Outface] text-xs'><span  className='font-[outfit-bold]'>5.Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the 
          fillings. Let it cook for another minute, then slide it onto a plate.</p>
          <p className='font-[Outface] text-xs'><span  className='font-[outfit-bold]'>6.Enjoy:</span> Serve hot, with additional salt and pepper if needed.</p>
        </ul>
        <h3  className='font-[outfit-bold] text-xl mt-5  border-t border-black'>Nutrition</h3>
        <p className='font-[Outface] text-xs mt-5'>The table below shows nutritional values per serving without the additional fillings.</p>
        <table className="w-full border-collapse">
  <tbody className='text-sm font-[Outface] '>
    <tr className="border-b border-black">
      <td className="px-4 py-2">Calories</td>
      <td className="px-4 py-2">277 kcal</td>
    </tr>
    <tr className="border-b border-black">
      <td className="px-4 py-2">Carbs</td>
      <td className="px-4 py-2">0g</td>
    </tr>
    <tr className="border-b border-black">
      <td className="px-4 py-2">Protein</td>
      <td className="px-4 py-2">20g</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Fat</td>
      <td className="px-4 py-2">22g</td>
    </tr>
  </tbody>
</table>
      </div>
      </div>
    </div>
  )
}

export default App
