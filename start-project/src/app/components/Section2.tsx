import Image from 'next/image'
import vector16 from '../../../public/Vector-16.svg' 
export default function Section2(){


    return(
<section id="section-2">
{/* <div className='vector-con'>
    <Image className='vector162' src={vector16} alt="vector16" />
 </div> */}
<div className="rewards-container">
<div className='btn-div'>
Our goal is simple:
</div>
<h4>To provide you best</h4>
<h3>Offers and Rewards</h3>
<h2>REWARDS</h2>
<div className='sliding-cards'>
    <div className='sliding-cards-top'>
    </div>
    <div className='sliding-cards-bottom'></div>
</div>
</div>
</section> 
   );
}