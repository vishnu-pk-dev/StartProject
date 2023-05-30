import Image from 'next/image'
import logo from '../../../public/START_logo_fullwhite.svg' 
export default function Section1Nav() {
    return(
        <nav>
        <div><Image className='logo' src={logo} alt="logo" /></div>
        <div className='nav-links'> 
          <a href="">Rewards</a>
          <a href="">Contact us</a>
          <a href="">FAQs</a>
        </div>
        <button>
          Sign in
        </button>
      </nav>
    );}