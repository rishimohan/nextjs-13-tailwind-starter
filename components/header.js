import Link from 'next/link'
// import Popover from '../ui/popover';


const Header = () => (
  <div className="flex items-center justify-center fixed top-[14px] w-full mb-10">
    <div className="flex items-center justify-center border border-gray-100 text-sm rounded-full bg-white/60 backdrop-blur-lg px-3 py-1 shadow-[0_0_4px_rgba(0,0,0,0.1)] space-x-5">
      <Link href="/" className="">
        All Communities
      </Link>
      
    </div>
  </div>
);

export default Header;