import picture from '../assets/fotome.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Cv from '../assets/Cv-AlzaHendrian(2).pdf'

const Home = ({id}) => {
    return (
        <>
        <div id={`content${id}`} className="block lg:flex justify-between pt-28 items-center">
            <div className='lg:ms-40 lg:w-96 w-[90%] mx-auto font-Poppins'>
                <div className='text-lg lg:text-4xl text-green-400'>
                hello, my name is Alza and I am a Full Stack <a className='bg-[#434242] rounded-lg py-1 px-4 font-serif text-lg lg:text-3xl text-white'>Developer</a>
                <a className="text-cyan-400 lg:text-3xl ms-2">I'm very excited and ready to work.</a>  
                </div>
                <div className='mt-6 font-Poppins flex justify-between w-[25%] items-center'>
                    <HiOutlineArrowNarrowRight className='text-2xl'/>
                    <a href={Cv}>Resume</a>
                </div>
            </div>
            <div className='w-[80%] mx-auto lg:w-96 lg:me-40'>
                <img src={picture}/>
            </div>
        </div>
        </>
    )
}

export default Home