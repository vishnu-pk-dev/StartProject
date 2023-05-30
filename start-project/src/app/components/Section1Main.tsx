import Image from 'next/image'
import logo3d from '../../../public/start-3D.svg' 
import arrowRuond from '../../../public/Vector-arrow-round.svg' 
import women1 from '../../../public/joyful-afro-woman.png'
export default function Section1Main() {
    return(
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
        <div className='main-img-right'>
        <Image className='img-right' src={women1} alt="women-1"/>
        </div>
        </div>    );
}
