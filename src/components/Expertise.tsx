import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "PySpark",
    "SQL",
    "ETL Pipelines",
    "Feature Engineering",
    "Fraud Detection Models",
    "Databricks ML",
];

const labelsSecond = [
    "AWS S3",
    "AWS Glue",
    "AWS Redshift",
    "AWS Bedrock",
    "Databricks",
    "Delta Lake",
    "Apache Airflow",
    "Pipeline Optimization",
];

const labelsThird = [
    "Power BI",
    "Tableau",
    "Data Quality Checks",
    "Logging & Monitoring",
    "Visualization",
    "Reporting",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & Pipelines</h3>
                    <p>Experienced in building scalable ETL pipelines and processing large datasets using Python, PySpark, and SQL. Skilled in Databricks, Delta Lake, and fraud detection model development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Automation</h3>
                    <p>Proficient in AWS services (S3, Glue, Redshift, Bedrock) and Airflow for orchestration. Hands-on with pipeline automation, workflow optimization, and deployment in cloud environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Analytics & Visualization</h3>
                    <p>Strong expertise in creating interactive dashboards and reports using Power BI and Tableau. Skilled in data quality checks, logging, and monitoring to ensure accuracy and reliability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
