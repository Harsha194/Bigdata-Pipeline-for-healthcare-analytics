Cloud-Based Data Engineering Project (AWS | Spark | Python)

📌 Project Summary 

Designed and implemented a cloud-enabled Big Data Pipeline for Healthcare Analytics using AWS infrastructure and Apache Spark (PySpark). The system ingests synthetic healthcare data, performs distributed ETL processing, and generates aggregated analytics to support healthcare decision-making.

This project demonstrates cloud data engineering, distributed processing, and ETL pipeline design using industry-relevant tools.

🛠️ Tech Stack
Core Technologies

Programming Language: Python

Big Data Processing: Apache Spark (PySpark)

Cloud Platform: AWS

Storage Formats: CSV, Parquet

Cloud & Supporting Tools

AWS Services Used:

Amazon EC2 (Spark execution environment)

Amazon S3 (raw & processed data storage)

Database (Validation Layer):

MongoDB Atlas

Development & Version Control:

VS Code, Git, GitHub

📂 Dataset Description (Synthetic Healthcare Data)

To ensure data privacy, all datasets were synthetically generated.

Datasets

Patients

Demographics, lifestyle indicators

Visits

Diagnoses, visit timestamps

Prescriptions

Medication details, dosage, duration

🧱 Cloud-Based System Architecture (AWS)
+----------------------+
|  Synthetic Data      |
|  (CSV Files)         |
+----------------------+
           |
           v
+----------------------+
| Amazon S3            |
| Raw Data Storage     |
+----------------------+
           |
           v
+----------------------+
| Apache Spark on EC2  |
| (PySpark ETL Jobs)   |
+----------------------+
           |
           v
+----------------------+
| Data Cleaning &      |
| Transformation       |
+----------------------+
           |
           v
+----------------------+
| Aggregations &       |
| Analytics            |
+----------------------+
           |
           v
+----------------------+
| Amazon S3            |
| Parquet Outputs      |
+----------------------+
           |
           v
+----------------------+
| MongoDB Atlas        |
| (Validation Layer)   |
+----------------------+

🔄 End-to-End Pipeline Flow

Data Generation

Synthetic healthcare data created in CSV format

Cloud Storage (AWS S3)

Raw datasets stored in Amazon S3

Distributed Processing

Apache Spark jobs executed on AWS EC2

Data Cleaning

Missing values handled

Data types standardized

Invalid records filtered

ETL & Transformation

Dataset joins (Patients ↔ Visits ↔ Prescriptions)

Unified patient encounter dataset creation

Analytics & Aggregation

Healthcare metrics computed using Spark DataFrames

Optimized Storage

Cleaned and aggregated data stored in Parquet format on S3

Validation

Processed data validated using MongoDB Atlas

🎯 Milestone 1: Cloud Setup & Data Ingestion
Objective

Set up a cloud-based Spark environment and ingest healthcare datasets.

Key Contributions

Configured Apache Spark on AWS EC2

Stored raw datasets in Amazon S3

Designed schemas for healthcare datasets

Ingested CSV data into Spark DataFrames

Converted cleaned datasets to Parquet format

Outcome

✔ Cloud-ready Spark ingestion pipeline
✔ Structured healthcare datasets stored in S3

🎯 Milestone 2: ETL & Healthcare Analytics
Objective

Perform distributed ETL processing and analytical aggregation.

Key Contributions

Joined multiple healthcare datasets using Spark

Created unified patient encounter records

Implemented aggregations:

Visit frequency per patient

Diagnosis trends by age and gender

Medication usage patterns

Patient distribution by location

Stored analytics-ready datasets in Parquet format

Outcome

✔ Scalable ETL pipeline
✔ Analytical datasets suitable for reporting

📊 Sample Analytics Produced

Patient visit frequency analysis

Most common diagnoses by demographics

Medication prescription trends

Location-based healthcare insights

📁 Project Structure
Bigdata-Pipeline-for-healthcare-analytics/
│
├── data/
│   ├── raw/              # CSV data (S3 source)
│   ├── cleaned/          # Cleaned Parquet data
│   └── aggregated/       # Analytics outputs
│
├── scripts/
│   ├── ingestion.py      # Spark ingestion jobs
│   ├── cleaning.py       # Data preprocessing
│   └── aggregation.py   # ETL & analytics
│
├── backend/              # API & MongoDB validation
├── src/                  # Optional UI
├── README.md
└── LICENSE

🚀 Key Skills Demonstrated 

AWS Cloud Data Engineering

Apache Spark (PySpark)

ETL Pipeline Design

Distributed Data Processing

Amazon S3 Data Lake Concepts

Healthcare Data Modeling

Parquet Optimization

Version Control with Git

📌 Project Status

✅ Milestone 1 – Completed

✅ Milestone 2 – Completed

⏳ Milestone 3 – Predictive Analytics (Planned)

⏳ Milestone 4 – Visualization & Dashboarding (Planned)

🔮 Future Enhancements

Machine learning-based healthcare risk prediction

Spark job optimization on AWS

Workflow orchestration using Airflow

Cloud-based dashboards

📜 License

MIT License
