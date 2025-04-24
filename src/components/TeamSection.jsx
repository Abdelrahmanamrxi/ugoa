import TeamCard from "./TeamCards";
import { team } from "../data/content";
import {motion} from "motion/react";
import { Link } from "react-router-dom";

export default function(){
    return(
        <motion.div 
            initial={{opacity:0, scale:0.95}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.8, delay:0.2}}
            viewport={{once:true, amount:0.2}}
            className="flex flex-col py-10 justify-center bg-darkWhite shadow-xl items-center mt-24 gap-14">
                <h2 className="text-dark_green font-raleway font-bold text-lg md:text-3xl uppercase">Meet our team</h2>
                <div className="card px-6 grid grid-cols-1 justify-center items-center lg:grid-cols-3 gap-8">
                    {team.map((card)=>{
                        return(
                           <Link to="/about_us">
                            <TeamCard key={card.mail}
                                name={card.name}
                                image={card.photo}
                                role={card.role }
                                email={card.mail}
                                linkedin={card.linkedIn} />
                           </Link> 
                        )
                    })}
                </div>

            </motion.div>
    )
}
