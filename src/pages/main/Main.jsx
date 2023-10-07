import React from 'react';
import Background from '../../assets/images/video or image.png';
import Button from '../../components/buttons';
import { co2, head, sprout } from '../../assets/icons';
import leo from '../../assets/images/leo.png';
import jirav from '../../assets/images/jirav.png';

const Main = () => {
  const posible = [
    {
      id: 1,
      icon: co2,
      title: 'Легко и доступно в использовании',
      text: 'Курсы можно проходить в любое время, даже выполнять тесты не смотря на истечения срока',
    },
    {
      id: 2,
      icon: head,
      title: 'Развитие своих персональных навыков',
      text: 'Каждый может улучшить свои знание за короткий период и следить за своим прогрессом',
    },
    {
      id: 3,
      icon: sprout,
      title: 'Лучшая подобранная программа',
      text: 'Мы подготовили упрощенную методику обучения под каждого пользователя',
    },
  ];
  return (
    <div>
      <div>
        <img className='absolute' src={Background} alt='' />
        <div className='relative p-[100px]'>
          <p className='text-[white] text-[70px] font-bold mb-[30px]'>
            Empowering Climate and Biodiversity Initiatives
          </p>
          <Button text='What we do' />
        </div>
      </div>

      <div className='bg-[#1DB688] relative p-[100px]'>
        <p className='text-[white] text-[48px] font-semibold '>
          We are dedicated to expediting climate and biodiversity action through
          the funding and facilitation of decarbonization projects.
        </p>
      </div>

      <div className='p-[100px]'>
        <h4 className='font-semibold text-[#1DB688] text-[72px] mb-[60px]'>
          Our Values
        </h4>

        <div className='flex'>
          {posible.map((item) => (
            <div className='rounded-lg border border-solid border-gray-300 p-[48px] mr-[24px]'>
              <div className='flex justify-center items-center'>
                <img src={item.icon} alt='/' />
              </div>
              <h1 className='py-[24px] font-semibold text-[24px]'>
                {item.title}
              </h1>
              <p className='tetx-[16px]'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='p-[100px] flex'>
        <div className='flex flex-col mr-[24px]'>
          <div>
            <img src={leo} alt='' />
          </div>
          <h4 className='text-[#1DB688] text-[48px] font-semibold'>
            Why Biodiversity Matter
          </h4>
          <p className='text-[16px] w-[608px]'>
            Our planet is facing unprecedented challenges, from rising
            temperatures and extreme weather events to the loss of precious
            biodiversity. These issues affect not only the environment but also
            our health, economies, and the well-being of future generations.
            It's crucial that we all understand the interconnectedness of these
            challenges and the urgency of addressing them.
          </p>
        </div>
        <div className='flex flex-col'>
          <div>
            <img src={jirav} alt='' />
          </div>
          <h4 className='text-[#1DB688] text-[48px] font-semibold'>
            No Action Leads to End
          </h4>
          <p className='text-[16px] w-[608px]'>
            When it comes to climate and biodiversity, no action is too small.
            Every individual, every community, and every organization plays a
            crucial role in the solution. By raising awareness and taking steps
            toward sustainability, we can create a ripple effect of positive
            change that reaches far beyond our immediate surroundings.
          </p>
        </div>
      </div>

       <div className='bg-[#F0FFFB] p-[100px]'>
        <h4 className='text-[72px] font-semibold'>Participate in Our Workshops</h4>
       </div>
    </div>
  );
};

export default Main;
