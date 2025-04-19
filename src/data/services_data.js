import sales from "../assets/sales.svg"
import search from "../assets/search.svg"
import sourcing from '../assets/sourcing.svg'
import sustainability from '../assets/sas.svg'
import operation from '../assets/12.jpg'
import background_sales from "../assets/consult.jpg";
import sale_compilance from '../assets/11.jpg'
import reuse from '../assets/reuse_comp.jpg'
import feasibility from '../assets/10.jpg'
import background_feasibility from '../assets/feas.jpg'
import tech_design from '../assets/14.jpg'
import background_tech from '../assets/background_tech.png'
import sourcing_card from '../assets/15.jpg'
import waste_background from '../assets/recycle_background.jpg'
import business_strategy from '../assets/briefcase.svg'
import operations from '../assets/operations.svg'
import management from '../assets/4.svg'
import factory from '../assets/factory.svg'

const services_data=[
    {
        id:1,
        icon:search,
        title:"Comprehensive Feasibility Study",
        paragraph_1:"Leveraging up‑to‑date analytics to inform both investment and operational strategies.",
        paragraph_2:"Combining deep knowledge of recycling technologies with insights into market trends.",
        paragraph_3:"Assessing environmental regulations to ensure compliance and maximize impact.",
        read_more:"We are specialized in delivering comprehensive feasibility studies for the recycling industry, providing clients with up to date accurate, data-driven insights to guide investment and operational decisions. We combine deep expertise in recycling technologies, market trends, and environmental regulations to assess project viability, financial returns, and sustainability impacts. Our studies cover all stages of the recycling value chain—from material sourcing and processing capabilities to end-product markets and sales channels. "

    }
    ,
    {
     id:2,
     icon:business_strategy,
     title:"Business Strategy",
     paragraph_1:"Develop strategies that align with evolving market trends.",
     paragraph_2:"Tailor business approaches to meet customer needs and achieve sustainability targets.",
     paragraph_3:'Cover all aspect from market entry and competitive positioning to pricing strategies and long-term growth models.',
     read_more:"We support recycling companies in shaping effective business strategies that align with market trends, customer needs, and sustainability targets. From market entry planning and competitive positioning to pricing strategies and long-term growth models, our experts provide actionable insights to guide strategic decision-making and ensure profitability and resilience in a fast-evolving circular economy landscape."

    },

    {

        id:3,
        title:"Sourcing",
        icon:sourcing,
        paragraph_1:"End‑to‑end support in acquiring PET waste tailored to your recycling operations.",
        paragraph_2:"Evaluating material consistency and volume to match your production requirements.",
        paragraph_3:"Analyzing cost‑trends for waste and consumables, while ensuring supplier reliability and eco‑compliance",
        
        read_more:"We provide comprehensive support in sourcing PET waste by identifying reliable sources, evaluating availability and quality, and managing supply chain logistics to ensure a consistent flow of materials for recycling. Our services also include assessing market dynamics for cost-efficient procurement and securing necessary consumables, such as additives and chemicals, while evaluating supplier reliability and environmental compliance to maintain uninterrupted production and promote sustainable sourcing."

    },
    {
        id:4,
        title:"Operations Efficiency",
        icon:operations,
        paragraph_1:'Guiding you through every stage of machinery selection and customization for your recycling line.',
        paragraph_2:"Choosing machines specifically suited to your material streams and processing needs.",
        paragraph_3:"Ensuring equipment configurations meet your throughput targets efficiently.",
   
        read_more:"We provide end-to-end technical support in selecting and customizing machinery for recycling lines, focusing on capacity, energy efficiency, and operational costs. Our experts help define key operational parameters, while integrating advanced sorting technologies to ensure high material purity. We also evaluate process efficiency, optimizing equipment and operations for cost reduction, increased productivity, and minimal environmental impact. Through Line customization, we tailor machinery configurations to meet specific project needs, ensuring efficient, sustainable and scalable that align with industry standards. and provide highest output with best cost."
    },
  
    {
        id:5,
        title:"Sales & Compilance",
        icon:sales,
        paragraph_1:"Developing market‑driven sales strategies, optimizing distribution channels, and Establishing long‑term partnerships with buyers.",
        paragraph_2:"Embedding best environmental practices throughout operations to lower carbon footprints and elevate brand reputation.",
        paragraph_3:"Aligning financial performance with environmental responsibility to deliver both profitability and positive impact.",
        read_more:"We provide an integrated approach to sales, sustainability, and compliance in the recycling industry. Our sales strategy focuses on market demand, optimizing channels, and building long-term buyer partnerships. We align operations with best sustainability practices, reducing carbon emissions and enhancing brand reputation. For compliance, we ensure adherence to local and international regulations, keeping clients informed of industry standards. This holistic approach helps clients achieve financial success while promoting environmental responsibility and regulatory compliance."
    },
    {
        id:6,
        title:"Factory Design & Layout Optimization",
        icon:factory,
        paragraph_1:"We create efficient layouts that support smooth operations and allow room for future growth, ensuring your facility adapts easily to changing needs.",
        paragraph_2:"Every design meets relevant environmental and safety regulations while supporting efficient process flow and workplace safety.",
        read_more:"We offer specialized factory design and layout optimization services tailored for recycling facilities. Our support covers everything from concept development and process flow engineering to equipment layout, utility planning, and compliance with safety and environmental standards. With a focus on operational efficiency, scalability, and integration of future technologies, we deliver practical designs that align with your capacity goals while ensuring smooth material flow and adherence to industry regulations."
    }
 ,
     {
        id:7,
        title:"Management System",
        icon:management,
        paragraph_1:"We enable factories to achieve greater control over their processes, ensuring that every step is monitored and managed effectively."
    ,   paragraph_2:"Streamline operations and embed quality checks tailored to your specific needs.",
        paragraph_3:"Ensure compliance and ongoing growth",
        read_more:"We provide tailored support in developing and implementing factory management systems that enhance operational control, traceability, and efficiency. Our services include designing custom workflows, integrating quality assurance protocols, setting up data-driven monitoring tools, and aligning processes with industry best practices. Whether for production, maintenance, or inventory, we help build systems that ensure consistency, compliance, and continuous improvement."
    },
  
    {
        id:8,
        title:"Sustainability & Responsible Operations",
        icon:sustainability,
        paragraph_1:"Empowering factories to integrate ESG values into their everyday operations.",
        paragraph_2:"Creating tailored action plans that align with global standards.",
        paragraph_3:"Ensuring ongoing compliance, clear reporting, and measurable positive change.",
        read_more:'We support factories in embedding ESG and sustainability principles across their operations. Our approach includes developing tailored sustainability strategies, aligning with global frameworks, monitoring carbon footprint, and enhancing resource efficiency. We help integrate ESG into daily practices, reporting, and stakeholder engagement, ensuring long-term compliance, transparency, and positive environmental and social impact.'


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
        title:"GLOBAL MARKETS",
        text:"BRAND OWNERS APPROVALS",
        background_title:"SALES & COMPILANCE",
        image:sale_compilance,
        background_text:"We deliver an integrated strategy for sales, sustainability, and compliance in recycling, focusing on market demand, optimizing channels, reducing carbon emissions, and ensuring adherence to regulations for financial success and environmental responsibility."
,       background:background_sales
    }
    ,{
        id:3,
        title:"INFORMED DECISION",
        text:"FINANCIAL & REGULATIONS",
        background_title:"FEASIBILITY STUDY",
        background_text:"We specialize in comprehensive feasibility studies for the recycling industry, offering data-driven insights on project viability, financial returns, and sustainability across all stages of the recycling value chain."
,       image:feasibility,
        background:background_feasibility

    },{
        id:4,
        title:"MAXIMUM CAPACITY",
        text:"BOTTLE-2-BOTTLE",
        background_title:"TECHNICAL DESIGN",
        background_text:"We offer comprehensive technical support for selecting and customizing recycling machinery, emphasizing capacity, energy efficiency, and operational costs. Our experts integrate advanced sorting technologies to ensure high material purity and optimal performance."
    ,   image:tech_design,
        background:background_tech

    },
    {
        id:5,
        title:"GLOBAL SOURCING NETWORK",
        text:"SOURCING WORLDWIDE",
        background_title:"SOURCING",
        background_text:"We offer extensive support in sourcing PET waste, ensuring reliable supply chains, evaluating material quality, assessing market dynamics, and securing necessary consumables while promoting sustainability and supplier compliance.",
        image:sourcing_card,
        background:waste_background

    }

]
export default services_data