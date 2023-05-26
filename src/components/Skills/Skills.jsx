import {SiPostgresql, SiJavascript, SiTailwindcss, SiBootstrap} from 'react-icons/si'
import {GrMysql, GrReactjs} from 'react-icons/gr'
import {FaHtml5} from 'react-icons/fa'
import {TbBrandGolang} from 'react-icons/tb'

const Skill = () => {
    return (
        <>
        <div className="flex justify-end">
            <div className="w-[85%] lg:w-[95%] mx-auto text-white">
                <div className="bg-[#383838] pb-12 pt-4 lg:mt-[-19rem] rounded-lg">
                    <h1 className="flex justify-center text-3xl font-semibold mb-5">MY SKILLS</h1>
                    <div className="grid grid-cols-4 items-center w-[75%] mx-auto">
                        <div className="flex justify-center">
                            <TbBrandGolang className="text-blue-700 text-8xl"/>
                        </div>
                        <div className="flex justify-center">
                            <GrReactjs className="text-cyan-500 text-6xl flex justify-center"/>
                        </div>  
                        <div className="flex justify-center">
                            <SiJavascript className="text-yellow-500 text-6xl flex justify-center"/>
                        </div>  
                        <div className="flex justify-center">
                            <FaHtml5 className="text-orange-600 text-7xl flex justify-center"/>
                        </div>
                        <div className="flex justify-center">
                            <SiBootstrap className="text-purple-700 text-7xl flex justify-center"/>
                        </div>
                        <div className="flex justify-center">
                            <SiTailwindcss className="text-cyan-500 text-6xl flex justify-center"/>
                        </div>
                        <div className="flex justify-center">
                            <GrMysql className="text-blue-600 text-6xl flex justify-center"/>
                        </div>
                        <div className="flex justify-center">
                            <SiPostgresql className="text-blue-800 font-bold text-6xl flex justify-center"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skill