import TripForm from '@/components/Forms/trip_form'
import MapContainer from '@/components/map_container'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-10 pt-10 pb-5 h-[calc(100dvh-60px)]'>
      <div className='w-full h-full grid grid-cols-4'>
        <div className='h-full col-span-1 px-10'>
          <TripForm />
        </div>
        <div className='h-full col-span-3'>
          <MapContainer />
        </div>
      </div>
    </main>
  )
}
