import React from "react";
import proj01 from '../assets/images/mock1.png';
import proj02 from '../assets/images/mock2.png';
import proj03 from '../assets/images/mock3.png';
import proj04 from '../assets/images/mock4.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://github.com/KushithaCheekati/etl-data-lake-spark.git" target="_blank" rel="noreferrer"><img src={proj01} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Data Lake with Apache Spark (Udacity – Nano Degree Project)</h2>
                <p><strong>Tech stack:</strong> Python, Spark, AWS S3, Parquet</p>
                <p>
                    Designed and implemented an ETL pipeline that ingests raw JSON files from AWS S3,
                    processes data using PySpark, and stores results back into S3 in Parquet format.
                    Built a star schema data model with fact and dimension tables to support analytics queries
                    for the Sparkify music app, demonstrating data modeling, schema design, and distributed
                    processing in a cloud environment.
                </p>
            </div>
            

            <div className="project">
                <a href="https://github.com/KushithaCheekati/Apache-Spark-with-AWS-Glue.git" target="_blank" rel="noreferrer"><img src={proj02} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>End-to-End ETL Pipeline with AWS Glue and Redshift</h2>
                <p><strong>Tech stack:</strong> Spark, AWS Glue, S3, Redshift, Python</p>
                <p>
                  Developed an end-to-end ETL pipeline using AWS Glue to extract JSON data from S3,
                  transform it with PySpark, and load it into Amazon Redshift for analytics.
                  Leveraged the AWS Glue Data Catalog to manage metadata and ensure schema consistency,
                  while building scalable, serverless pipelines that eliminated manual overhead and
                  supported downstream BI tools.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/KushithaCheekati/Little-Big-Data-Engineering-Project-.git" target="_blank" rel="noreferrer"><img src={proj03} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Big Data Engineering Project with Airflow</h2>
                <p><strong>Tech stack:</strong> Apache Airflow, Python, Spark, AWS S3</p>
                <p>
                  Implemented a data pipeline orchestration system using Airflow to schedule and monitor ETL tasks.
                  Automated ingestion of raw data from S3, transformation via PySpark, and export of cleaned data
                  back to S3. Configured DAGs for dependency management, enabling scalable, production-ready workflows
                  suitable for real-world big data engineering use cases.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/KushithaCheekati/aws-spark-etl-ml.git" target="_blank" rel="noreferrer"><img src={proj04} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Data Engineering on AWS (AWS Samples)</h2>
                          <p><strong>Tech stack:</strong> Spark, AWS EMR, AWS S3, AWS Glue</p>
                <p>
                  Followed AWS best practices to design and deploy Spark-based ETL pipelines on AWS.
                  Processed large-scale datasets on EMR clusters, leveraging distributed computing for performance,
                  and integrated with AWS Glue Data Catalog for metadata management and schema enforcement.
                  The project demonstrated cloud-native data engineering workflows for big data analytics.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;
