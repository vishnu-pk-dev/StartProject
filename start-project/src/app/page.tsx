import Image from 'next/image'
import logo from '../../public/START_logo_fullwhite.svg' 
import logo3d from '../../public/start-3D.svg' 
import arrowRuond from '../../public/Vector-arrow-round.svg' 

export default function Home() {
  return (
   <section id='section-1' className='header-section'>
    <div className='bg-elements'>
      <h1 className='bg-elements-text'>START</h1>
      <div className='bg-elements-grad'></div>
      </div> 
    <div className='container'>
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
      <div className='main'>
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
      <div className='main-img-right'></div>
      </div>
      <div className='mouse-scroll'>
        <p className='mouse-scroll-text'></p>
        <div className='mouse-scroll-icon'></div>
      </div>
    </div>
   </section>
  )
}
