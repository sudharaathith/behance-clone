import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col'>
     <NavBar />
     {/* Banner with image */}
     <div>
        <div className='mt-[110px]'>
          <h1></h1>
        </div>
     </div>
    </main>
  )
}
