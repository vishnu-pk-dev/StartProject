import Image from 'next/image'
import mouseScroll from '../../../public/Mouse-icon.svg' 

export default function Section1Scroll() {
return(
    <div className='mouse-scroll'>
    <p className='mouse-scroll-text'>Scroll down</p>
    <div className='mouse-scroll-icon'>
      <Image src={mouseScroll} alt="mouse-scroll"/>
    </div>
  </div>
  );
}