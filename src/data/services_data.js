import sales from "../assets/sales.svg"
import search from "../assets/search.svg"
import sourcing from '../assets/sourcing.svg'
import technical from '../assets/technical.svg'
import operation from '../assets/4.jpeg'
import background_sales from "../assets/consult.jpg";
import sale_compilance from '../assets/5.png'
import reuse from '../assets/reuse_comp.jpg'
import feasibility from '../assets/6.jpg'
import background_feasibility from '../assets/feas.jpg'
import tech_design from '../assets/3.jpg'
import background_tech from '../assets/background_tech.png'
import waste from '../assets/2.png'
import waste_background from '../assets/recycle_background.jpg'
const services_data=[
    {
        id:'1',
        icon:search,
        title:"Comprehensive Feasibility Study",
        paragraph_1:"Ditch risky ventures, embrace informed leaps.",
        paragraph_2:"Our feasibility studies illuminate hidden pitfalls and ignite success, turning “might-be” into “must-be” projects.",
        paragraph_3:"Partner with us, invest with confidence.",
        read_more:"We are specialized in delivering comprehensive feasibility studies for the recycling industry, providing clients with up to date accurate, data-driven insights toguide investment and operational decisions. We combine deep expertise in recycling technologies,market trends, and environmental regulations to assess project viability, financial returns, and sustainability impacts. Our studies cover all stages of the recycling value chain—from material sourcing and processing capabilities to end-product markets and sales channels. "

    }
    ,
    {

        id:'2',
        title:"Sourcing",
        icon:sourcing,
        paragraph_1:"Prevent raw material scarcity.",
        paragraph_2:"We're your lifeline, finding suppliers, negotiating prices, and securing flows.",
        paragraph_3:"Breath easy, build your bottom line.",
        paragraph_4:"Source smarter with our guidance.",
        read_more:"We provide comprehensive support in sourcing PET waste by identifying reliable sources, evaluating availability and quality, and managing supply chain logistics to ensure a consistent flow of materials for recycling. Our services also include assessing market dynamics for cost-efficient procurement and securing necessary consumables, such as additives and chemicals, while evaluating supplier reliability and environmental compliance to maintain uninterrupted production and promote sustainable sourcing."

    },
    {
        id:'3',
        title:"Technical Design & Operation",
        icon:technical,
        paragraph_1:'Tired of recycling chaos? We engineer efficiency.',
        paragraph_2:"Design, build and optimize operations, from sorting systems to pellet production.",
        paragraph_3:"Maximize yield, minimize costs.",
        paragraph_4:"Turn waste into profit with our expert blueprint",
        read_more:"We provide end-to-end technical support in selecting and customizing machinery for recycling lines, focusing on capacity, energy efficiency, and operational costs. Our experts help define key operational parameters, while integrating advanced sorting technologies to ensure high material purity. We also evaluate process efficiency, optimizing equipment and operations for cost reduction, increased productivity, and minimal environmental impact. Through Line customization, we tailor machinery configurations to meet specific project needs, ensuring efficient, sustainable and scalable that align with industry standards. and provide highest output with best cost."
    },
    {
        id:'4',
        title:"Sales & Compilance",
        icon:sales,
        paragraph_1:"We're your revenue compass, igniting growith with data-driven sales strategies.",
        paragraph_2:"Navigate complex regulations with ease, boosting margins and minimizing risk.",
        paragraph_3:"Watch profits soar as you sell smarter and comply effortlessly.",
        read_more:"We provide an integrated approach to sales, sustainability, and compliance in the recycling industry. Our sales strategy focuses on market demand, optimizing channels, and building long-term buyer partnerships. We align operations with best sustainability practices, reducing carbon emissions and enhancing brand reputation. For compliance, we ensure adherence to local and international regulations, keeping clients informed of industry standards. This holistic approach helps clients achieve financial success while promoting environmental responsibility and regulatory compliance."
    }
    ]
export const new_projects=[
    {
        title:"Feasibility Study",
        text:"Reviewing assumptions to ensure numbers are correct inline with industry trends."
    },
    {
        title:"Pre Installation",
        text:"Factory layout review, machines selection, tendering process management till contracts signage."
    },
    {
        title:"Installation and Pre-Production",
        text:"Supervision on installation process while preparing SOPs for each department and start with essential preparation for plant establishment and compliance."

    },
    {
        title:"Post Installation",
        text:"Knowledge transfer of efficient processes in different departments. Optimum production setup, importation process, and start brands approval process."
    }
]
export const old_projects=[
    {
        title:"PROJECT ASSESSMENT",
        text:"Full assessment to line current status to evaluate all relevant factors to gain a comprehensive understanding of the situation at hand."
    },
    {
        title:"INITIAL REPORT ON NEEDED ENHANCMENTS",
        text:"Report on current line status vs global benchmark and submit development plan with estimated cost to reach the targted result."
    },
    {
        title:"PROCESS DEVELOPMENT",
        text:"Start the agreed enhancement implementation process while reporting the achieved results vs agreed timeline and cost"
    },
    {
        title:"TRAINING & HANDOVER",
        text:"In different department. optimum production setup, importation process and start brands approval process"
    }
]
export const service_header=[
    {
        id:1,
        background_title:"OPERATIONAL EFFECIENCY",
        title:"SEAMLESS PROCESS",
        text:"WITH MINIMAL RESOURCES",
        image:operation,
        background:reuse,
        background_text:"We focus on operational efficiency and excellence by evaluating process effectiveness and optimizing equipment. Our tailored solutions promote cost reduction, increased productivity, and minimal environmental impact, aligning with industry standards for sustainable scalability."
    },
    {
        id:2,
        title:"REACHING PEAK PRICEBRAND",
        text:"BRAND OWNERS APPROVALS",
        background_title:"SALES & COMPILANCE",
        image:sale_compilance,
        background_text:"We deliver an integrated strategy for sales, sustainability, and compliance in recycling, focusing on market demand, optimizing channels, reducing carbon emissions, and ensuring adherence to regulations for financial success and environmental responsibility."
,       background:background_sales
    }
    ,{
        id:3,
        title:"ALL BUSINESS ASPECTS",
        text:"FINANCIAL & REGULATIONS",
        background_title:"FEASIBILITY STUDY",
        background_text:"We specialize in comprehensive feasibility studies for the recycling industry, offering data-driven insights on project viability, financial returns, and sustainability across all stages of the recycling value chain."
,       image:feasibility,
        background:background_feasibility

    },{
        id:4,
        title:"6 TPH PET PLANT",
        text:"BOTTLE-2-BOTTLE",
        background_title:"TECHNICAL DESIGN",
        background_text:"We offer comprehensive technical support for selecting and customizing recycling machinery, emphasizing capacity, energy efficiency, and operational costs. Our experts integrate advanced sorting technologies to ensure high material purity and optimal performance."
    ,   image:tech_design,
        background:background_tech

    },
    {
        id:5,
        title:"RAW MATERIAL",
        text:"SOURCING WORLDWIDE",
        background_title:"SOURCING",
        background_text:"We offer extensive support in sourcing PET waste, ensuring reliable supply chains, evaluating material quality, assessing market dynamics, and securing necessary consumables while promoting sustainability and supplier compliance.",
        image:waste,
        background:waste_background

    }

]
export default services_data