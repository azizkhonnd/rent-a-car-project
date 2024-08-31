import siteLogo from '../header/site-logo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className=" footerContainer bg-white pt-[80px]">
                <div className='container flex w-full justify-between '>
                    <div className="footerLogo">
                        <img src={siteLogo} alt="site logo" width={148} height={44} />
                        <div className="footerText w-[54%] mt-[18px]">
                            <p>Our vision is to provide convenience and help increase your sales business.</p>
                        </div>
                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold text-base mb-5'>About</h3>
                            <Link to='#'>How it works</Link>
                            <Link to='#'>Featured</Link>
                            <Link to='#'>Partnership</Link>
                            <Link to='#'>Business Relation</Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold text-base mb-5'>Community</h3>
                            <Link to='#'>Events</Link>
                            <Link to='#'>Blog</Link>
                            <Link to='#'>Podcast</Link>
                            <Link to='#'>Invite a friend</Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold text-base mb-5 '>Socials</h3>
                            <Link to='#'>Discord</Link>
                            <Link to='#'>Instagram</Link>
                            <Link to='#'>Twitter</Link>
                            <Link to='#'>Facebook</Link>
                        </div>
                    </div>
                    <div className='line mt-[30px] w-[1320px] h-[1px] bg-slate-300'>
                    </div>
                    <div className=' w-[1320px] mt-[10px] flex justify-between'>
                        <p className='font-semibold'>©2022 MORENT. All rights reserved</p>
                        <p className='font-semibold'>Privacy & Policy</p>
                        <p className='font-semibold'>Terms & Condition</p>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Footer