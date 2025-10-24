
import Card from "./components/card";


const App = () => {
const jobOpenings = [
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    position: "Frontend Developer",
    posted: "10 days ago",
    type: "Full-time",
    level: "Junior Level",
    dueDate: "Dateover",
    salary: "$45/hour",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    position: "Backend Engineer",
    posted: "2 weeks ago",
    type: "Full-time",
    level: "Senior Level",
    salary: "$120/hour",
    location: "New York, USA"
  },
  {
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    position: "UI/UX Designer",
    posted: "4 weeks ago",
    type: "Part-time",
    level: "Junior Level",
    dueDate:"Dateover",
    salary: "$60/hour",
    location: "London, UK"
  },
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    position: "React Developer",
    posted: "5 days ago",
    type: "Full-time",
    level: "Senior Level",
    salary: "$150/hour",
    location: "Berlin, Germany"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    position: "Machine Learning Engineer",
    posted: "1 week ago",
    type: "Full-time",
    level: "Senior Level",
    salary: "$220/hour",
    location: "Tokyo, Japan"
  },
  {
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    position: "Cloud Engineer",
    posted: "3 weeks ago",
    type: "Part-time",
    level: "Junior Level",
    salary: "$70/hour",
    location: "Singapore"
  },
  {
    companyLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    position: "AI Research Intern",
    posted: "6 days ago",
    type: "Part-time",
    level: "Junior Level",
    salary: "$40/hour",
    location: "San Francisco, USA"
  },
  {
    companyLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    position: "Software Engineer",
    posted: "2 weeks ago",
    type: "Full-time",
    level: "Senior Level",
    dueDate:"Dateover",
    salary: "$180/hour",
    location: "Austin, USA"
  },
  {
    companyLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    position: "Data Engineer",
    posted: "3 days ago",
    type: "Full-time",
    level: "Senior Level",
    salary: "$200/hour",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    position: "Cloud Consultant",
    posted: "1 week ago",
    type: "Part-time",
    level: "Junior Level",
    salary: "$85/hour",
    location: "Dublin, Ireland"
  }

];

// console.log(jobOpenings)
  
  return (
    <div className="parent">
      { jobOpenings.map((elem,idx)=>{
                return  <div key={idx}>
     <Card logo={elem.companyLogo}  dueDate={elem.dueDate} companyname={elem.companyName} position={elem.position} posted={elem.posted} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location} />
       </div>
       })}
   </div>
  );
};
 

export default App;
