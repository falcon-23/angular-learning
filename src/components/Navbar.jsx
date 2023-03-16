import { useSelector } from "react-redux";

 import { AiOutlineShoppingCart } from 'react-icons/ai'

 const Navbar  = ()=> {

    console.log(useSelector(store => {
        console.log(store);
    }))
    const { amount } = useSelector(state => state.cart);

    return (
        <nav className="bg-blue-400 border-red-400">
            <div className="max-w-3xl mx-auto py-4 flex flex-row justify-between items-center">
                <h3 className="text-center text-xl font-semibold text-white">redux toolkit</h3>
                <div className="relative">
                        <div className="font-bold text-3xl text-white z-20">
                            <AiOutlineShoppingCart  />
                        </div>
                       
                            <p className=" font-serif z-0 absolute -top-4 bg-slate-400 py-0 px-1 -right-1 rounded-full text-white">{amount}</p>
                        
                </div>
            </div>
        </nav>
    )
 }
 export default Navbar; 