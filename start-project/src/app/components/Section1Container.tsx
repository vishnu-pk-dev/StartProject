// import Image from 'next/image'
// import vector16 from '../../../public/Vector-16.svg'
import Section1Nav from "./Section1Nav";
import Section1Main from "./Section1Main";
import Section1Scroll from "./Section1Scroll";
export default function Section1Container() {
  return (
    <div className="container" id="sect-1-cont">
      <Section1Nav />

      <Section1Main />

      <Section1Scroll />

      {/* <div><Image className='vector16' src={vector16} alt="vector16" /></div> */}
    </div>
  );
}
