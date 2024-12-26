import React from 'react'

const packages = [
  {
    name: 'Bronze Package',
    price: '$99',
    description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
    ],
  },
  {
    name: 'Silver Package',
    price: '$199',
    description: 'A great choice for growing businesses with additional features and support for mental wellness.',
    features: [
      'All Bronze Package features',
      'Monthly guided meditation sessions',
      'Personalized wellness plan',
      'Access to expert webinars',
    ],
  },
  {
    name: 'Gold Package',
    price: '$299',
    description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
    features: [
      'All Silver Package features',
      'Weekly one-on-one coaching sessions',
      'Advanced mental wellness tracking tools',
      '24/7 access to mental wellness experts',
    ],
  },
]

const Pricing=()=> {
  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small and Large Brands</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>loeme wjdnjdichcnjkcnuchfweuifhejcnkdcndjccfejdhlajdkj bwhdeuidh dcfhefuwf  hdisfgcyefceyf uefhuifcbcd huehd uhduifdhbs uewhideydhiduwod hishsdujj ssuodhufh</p>
        </div>

        {/*packages*/}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8'>
        {
          packages.map((pkg, index) => (
            <div key={index}>
              <h3>{pkg.name}</h3>
              <hr />
              <p>{pkg.price} <span></span></p>
            </div>
          ) )
        }
        </div>
      </div>
    </div>
  )
}

export default Pricing