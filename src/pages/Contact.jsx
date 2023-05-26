import '../index.css'
import {BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Contact = ({id}) => {
    return (
        <>
        <div id={`content${id}`} className="bg-gradient-custom pb-10 lg:pb-20 mb-5 px-10 lg:px-20 rounded-lg w-[85%] lg:w-[95%] m-auto mt-12">
            <h1 className="flex justify-center text-black text-3xl font-semibold pt-5">My Contact</h1>
            <div className='grid grid-cols-4 gap-16 lg:gap-5 w-[100%] lg:w-[80%] mt-6 lg:mt-12 m-auto items-center'>
            <div className="flex justify-center">
                <a href="https://github.com/AlzaHendrian">
                    <BsGithub className='text-5xl lg:text-9xl'/>
                </a>
            </div>
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/alza-hendrian/">
                    <BsLinkedin className='text-5xl lg:text-9xl text-blue-800'/>
                </a>
            </div>
            <div className="flex justify-center">
                <a href="mailto:alzahendriaan@gmail.com">
                    <MdEmail className='text-5xl lg:text-9xl text-red-500'/>
                </a>
                
            </div>
            <div className="flex justify-center">
                <a href="https://wa.me/6281298225252">
                    <BsWhatsapp className='text-5xl lg:text-9xl text-green-500'/>
                </a>
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact