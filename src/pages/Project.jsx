import Card from "../components/Card"
import WaysHubLanding from '../assets/Landing.png'
import WayshubHome from '../assets/Home.png'
import WayshubDetailVideo from '../assets/DetailVideo.png'
import DumbwaysHome from '../assets/Beranda.png'
import DumbwaysMovie from '../assets/Movies.png'
import DumbwaysTvShows from '../assets/TvShows.png'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandGolang} from 'react-icons/tb'
import {SiPostgresql} from 'react-icons/si'
import Skill from "../components/Skills/Skills"

const Project = ({id}) => {
    return (
        <>
        <div id={`content${id}`} className="font-Poppins pt-12">
            <h2 className="flex justify-center text-3xl font-semibold mt-12">My Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
                <div className="flex justify-end">
                    <div className="w-[85%] mx-auto lg:w-[95%]">
                        <div className="bg-[#C2E8CE] px-4 pt-3 pb-4 rounded-lg">
                            <Card 
                                Card1={WaysHubLanding}
                                Card2={WayshubHome}
                                Card3={WayshubDetailVideo}
                                id1= "item1"
                                id2= "item2"
                                id3= "item3"
                            />
                            <h1 className="text-xl lg:text-2xl mt-4 lg:mt-8 font-semibold flex justify-center">
                                WaysHub
                            </h1>
                            <div className="block lg:flex justify-between mt-2 lg:mt-4">
                                <div className="lg:ms-10">
                                    <h1 className="font-semibold text-base lg:text-xl">
                                        Study Case :
                                    </h1>
                                    <h1 className="text-justify text-sm lg:text-base">
                                        Learning Youtube Flow system.
                                    </h1>
                                    <h1 className="font-semibold mt-2 text-base lg:text-xl">
                                        Technologies :
                                    </h1>
                                    <div className="flex text-4xl items-center">
                                        <GrReactjs className="text-cyan-400 me-3"/>
                                        <TbBrandGolang className="text-blue-700 me-3 text-5xl"/>
                                        <SiPostgresql className="text-blue-500"/>
                                    </div>
                                </div>
                                <div className="me-10">
                                    <h1 className="font-semibold text-base mt-2 lg:mt-[-3px] lg:text-xl">Repositories :</h1>
                                    <div className="flex lg:mt-1">
                                        <a href="https://github.com/AlzaHendrian/hubways-Fe" className="me-3 bg-blue-500 rounded-sm px-4 py-1 text-white flex items-center">
                                            Client
                                        </a>
                                        <a href="https://github.com/AlzaHendrian/backend-hubways" className="bg-[#434242] rounded-sm px-4 py-1 text-white flex items-center">
                                            Server
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className=" flex justify-start">
                    <div className="w-[85%] mx-auto lg:w-[95%]">
                        <div className="bg-[#B3FFAE] px-4 pt-3 pb-4 rounded-lg">
                            <Card
                                Card1={DumbwaysHome}
                                Card2={DumbwaysMovie}
                                Card3={DumbwaysTvShows}
                                id1= "itm1"
                                id2= "itm2"
                                id3= "itm3"
                            />
                            <h1 className="text-xl lg:text-2xl mt-4 lg:mt-8 font-semibold flex justify-center">
                                Dumbways
                            </h1>
                            <div className="block lg:flex justify-between mt-2 lg:mt-4">
                                <div className="lg:ms-10">
                                    <h1 className="font-semibold text-base lg:text-xl">
                                        Study Case :
                                    </h1>
                                    <h1 className="text-justify text-sm lg:text-base">
                                        Learning Netflix Flow system.
                                    </h1>
                                    <h1 className="font-semibold mt-2 text-base lg:text-xl">
                                        Technologies :
                                    </h1>
                                    <div className="flex text-4xl items-center">
                                        <GrReactjs className="text-cyan-400 me-3"/>
                                        <TbBrandGolang className="text-blue-700 me-3 text-5xl"/>
                                        <SiPostgresql className="text-blue-500"/>
                                    </div>
                                </div>
                                <div className="me-10">
                                    <h1 className="font-semibold text-base mt-2 lg:mt-[-3px] lg:text-xl">Repositories :</h1>
                                    <div className="flex lg:mt-1">
                                        <a href="https://github.com/AlzaHendrian/dw-Frontend" className="me-3 bg-blue-500 rounded-sm px-4 py-1 text-white flex items-center">
                                            Client
                                        </a>
                                        <a href="https://github.com/AlzaHendrian/backend" className="bg-[#434242] rounded-sm px-4 py-1 text-white flex items-center">
                                            Server
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Skill/>
            </div>
        </div>
        </>
    )
}

export default Project