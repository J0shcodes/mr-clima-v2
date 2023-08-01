import Image from 'next/image'
import {IoLocationOutline} from 'react-icons/io5'
import {BsThermometerHalf} from 'react-icons/bs'

export default function Home() {
  return (
    <main className="pt-8 bg-red-400">
     <div>
      <div>
        <div className='flex'>
          <p>Lagos</p>
          <div>
            <IoLocationOutline/>
          </div>
        </div>
        <div>
          <div className='flex'>
            <div>
              <BsThermometerHalf/>
            </div>
            <div>27&deg;C</div>
            <div className='bg-blue-700'>
              <Image src="/icons/clouds.png" alt='' width={100} height={100}/>
            </div>
          </div>
          <div>Aug, 23 Tue</div>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='uppercase'>humidity</p>
            <p>99%</p>
          </div>
          <div>
            <p className='uppercase'>visibility</p>
            <p>8km</p>
          </div>
          <div>
            <p className='uppercase'>air pressure</p>
            <p>1005hpa</p>
          </div>
          <div>
            <p className='uppercase'>wind</p>
            <p>2mph</p>
          </div>
        </div>
      </div>
     </div>
    </main>
  )
}
