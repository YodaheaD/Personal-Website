 
import DashboardPage from '@/components/dashboard-page'
import HomePage from '@/components/home-page'
import { NotificationsCard } from '@/components/notis-card'
import Image from 'next/image'

export default function Home() {
  //<DashboardPage/> 

   return (
    <div className=' container mx-auto py-10 '>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-2'>
        Dashboard
      </h1>
    <HomePage/> 
   </div>
  )
}
