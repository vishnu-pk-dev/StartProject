import Image from 'next/image'
// import logo from '../../../public/START_logo_fullwhite.svg' 
// import logo3d from '../../../public/start-3D.svg' 
// import arrowRuond from '../../../public/Vector-arrow-round.svg' 
// import women1 from '../../../public/joyful-afro-woman.png'
// import mouseScroll from '../../../public/Mouse-icon.svg' 
// import vector16 from '../../../public/Vector-16.svg' 
import Section1Nav from './Section1Nav'
import Section1Main from './Section1Main'
import Section1Scroll from './Section1Scroll'
export default function Section1Container() {
    return(
        <div className='container'>
      {/* <nav>
        <div><Image className='logo' src={logo} alt="logo" /></div>
        <div className='nav-links'> 
          <a href="">Rewards</a>
          <a href="">Contact us</a>
          <a href="">FAQs</a>
        </div>
        <button>
          Sign in
        </button>
      </nav> */}
      <Section1Nav/>
      {/* <div className='main'>
      <div className='main-content'>
        <h3 className='q-heading'>Buying a property?</h3>
        <p className='q-answer'>The only thing left to sweeten the deal is our</p>
        <h2 className='year-end'>Year End</h2>
        <Image className='logo-3d' src={logo3d} alt="logo3D" />
        <div className='flex-container'>
          <div className='h-line'></div>
          <p className='offer-text'>Festive offers are back</p>
        </div>
        <p className='promo-text'>Enjoy special promos and download cashback vouchers that will help you EARN more savings from participating projects and household brands.</p>
          <button>
          <Image className='button-ico' src={arrowRuond} alt="arrowRound"/>
          <p>Explore rewards</p>
          </button>
      </div>
      <div className='main-img-right'>
      <Image className='img-right' src={women1} alt="women-1"/>
      </div>
      </div> */}
      <Section1Main/>
      {/* <div className='mouse-scroll'>
        <p className='mouse-scroll-text'>Scroll down</p>
        <div className='mouse-scroll-icon'>
          <Image src={mouseScroll} alt="mouse-scroll"/>
        </div>
      </div> */}
      <Section1Scroll/>

      {/* <div><Image className='vector16' src={vector16} alt="vector16" /></div> */}
    </div>
    );
}