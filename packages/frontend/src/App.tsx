import React from 'react';
import { Button } from 'antd';
import './App.css';
import { FaJava, FaAndroid, FaReact, FaNodeJs, FaPython,} from "react-icons/fa";
import {SiAngular, SiCodacy, SiCsharp, SiFlutter, SiIos, SiJquery, SiRuby, SiSpring} from "react-icons/si";
import {FaGolang} from "react-icons/fa6";

const specialities = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'J2EE', icon: <SiJquery /> },
    { name: 'Spring', icon: <SiSpring /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'iOS', icon: <SiIos /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'React-Native', icon: <FaReact /> },
    { name: 'GoLang', icon: <FaGolang /> },
    { name: 'QA (Quality Assurance)', icon: <SiCodacy /> },
    { name: 'Fullstack', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C#', icon: <SiCsharp /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'Ruby', icon: <SiRuby /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
];

const App: React.FC = () => {
    const handleButtonClick = (label: string) => {
        alert(`You selected ${label}`);
    };

    return (
        <div className="button-cloud-container">
            <div className="button-row">
                {specialities.map((speciality, index) => (
                    <Button
                        key={index}
                        type="primary"
                        ghost
                        className="floating-button"
                        icon={speciality.icon}
                        onClick={() => handleButtonClick(speciality.name)}
                    >
                        {speciality.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default App;
