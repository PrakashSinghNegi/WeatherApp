import { TentTree } from 'lucide-react';

const Navbar = () => {
  return (
    <header className='bg-neutral rounded-2xl'>
        <div className='flex gap-8 justify-center items-center py-8'>
           <TentTree className='size-9'></TentTree>
           <h1 className='text-3xl'>Weather App</h1>
        </div>
       
    </header>
  )
}

export default Navbar