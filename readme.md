# Prakriti Analysis DL & ML Model (Still under Development)

Welcome to the Prakriti Analysis DL & ML Model repository! This project focuses on developing a machine learning model for performing analysis and predictions related to the Prakriti domain. The model utilizes various ML techniques to analyze data and make insightful predictions.

## Description

The Prakriti Analysis DL Model aims to provide valuable insights and predictions within the Prakriti domain. Prakriti refers to the individual constitution in Ayurveda, which determines one's physical, mental, and emotional characteristics. This ML model analyzes data related to Prakriti and provides predictions based on the available information.

## Features

- **Data Processing:** The model preprocesses raw data, performs data cleaning, and prepares the dataset for analysis.
- **Feature Extraction:** The model extracts relevant features from the dataset to capture meaningful information for analysis and prediction.
- **Exploratory Data Analysis (EDA):** The model conducts EDA to uncover patterns, relationships, and trends within the dataset related to Prakriti.
- **Machine Learning Algorithms:** The model employs various ML algorithms, such as regression, classification, or clustering, to train predictive models based on Prakriti data.
- **Model Evaluation:** The model assesses the performance of trained ML models using appropriate evaluation metrics.
- **Prediction Generation:** Once the ML models are trained and evaluated, the model generates predictions or classifications based on new input data related to Prakriti.
- **Deeplearning Algorithm:** The model employs deep learning algorithms to classify the prakriti
- **Model Deployment:** The model provides guidelines or scripts for deploying the ML model into a production environment, allowing for real-time predictions or integration with other systems.

## Prerequisites

To utilize the Prakriti Analysis ML Model, ensure that you have the following prerequisites installed:

- Python (v3.6 or higher)
- Required Python libraries (NumPy, Pandas, Scikit-learn,TensorFlow 2.0,Flask etc.)
- Jupyter Notebook or any other IDE for running Python scripts

## Installation

To install and use the Prakriti Analysis ML Model, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/puter-nyaani-Soma/prakriti-analysis
```

2. Install the required dependencies:

```bash
cd prakriti-analysis-ml-model
pip install -r requirements.txt
```

3. Open the provided Jupyter Notebook or Python scripts:

```bash
jupyter notebook
```

4. Execute the code cells or run the Python scripts to perform data analysis, model training, and prediction generation related to Prakriti.

## Folder Structure

The project folder structure is organized as follows:

```
prakriti-analysis
  ├── ml/                         # has the Deep learning model and the server program which runs the machine learning prediction algorithm in flask server
        ├── prakriti-model/       # has the saved tensorflow model
        ├── results/              # has the results of using various ml models
        ├── deeplearning.ipynb    # deep learning classification
        ├── mlml.py               # machine learning classification 
        ├── prediction.py         # python flask server
        └── ...
      
  ├── web-application/  #has the web application made using MERN stack
        ├── backend/ #has the backend for the web application
        ├── frontend/ #has the frontend of the web application
        └── ...

  ├── README.md               # Project readme file
  └── ...
```

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes and their benefits.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please feel free to contact the project maintainer at [sivabala2053@gmail.com](mailto:sivabala2053@gmail.com).

Enjoy analyzing Prakriti data!
