import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp"
import serviceImg2 from "../assets/service2.webp"
import serviceImg3 from "../assets/service3.webp"
import serviceImg4 from "../assets/service4.webp"

const Services=()=> {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>At Mindleep, we provide the tools and support to help you navigate life’s challenges. You don’t have to face it alone—we're here to help create positive change.</p>
        </div>
        {/*services category */}
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
    <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
      <Tab>Couple Counselling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col md:flex-row gap-8 mt-8 ">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
        <p className='mb-8'>Strengthen your relationship with guidance from our experienced counselors. Learn how to communicate better, resolve conflicts, and build trust in a supportive environment.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved communication and conflict resolution skills</li>
          <li>Strengthened emotional connection and trust</li>
          <li>Tools for long-term relationship growth</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel >
    <div className="flex flex-col md:flex-row gap-8 mt-8 ">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
        <p className='mb-8'>Gain practical tips on effective communication, discipline, and creating a nurturing space for your child with our parenting skills workshops.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Practical strategies for effective discipline</li>
          <li>Enhanced parent-child communication</li>
          <li>Support in creating a positive, nurturing environment</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel>
    <div className="flex flex-col md:flex-row gap-8 mt-8 ">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
        <p className='mb-8'>Feeling trapped in personal or professional aspects of life? We offer coaching and strategies to help you break free, set goals, and move forward.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Clarity on personal and professional goals</li>
          <li>Techniques to break negative thought patterns</li>
          <li>Renewed motivation and sense of purpose</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel>
    <div className="flex flex-col md:flex-row gap-8 mt-8 ">
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Self Confidence</h3>
        <p className='mb-8'>Boost your self-esteem and overcome self-doubt through our tailored resources and coaching, helping you embrace a confident, empowered version of yourself.</p>
        <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Improved self-awareness and self-esteem</li>
          <li>Strategies to overcome self-doubt and fear</li>
          <li>Empowerment to take on new challenges confidently</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>
  </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
