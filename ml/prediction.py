import tensorflow as tf
from flask import Flask, request, jsonify
import numpy as np
loaded_model = tf.keras.models.load_model('d:/prakriti-analysis/ml/prakriti-model')
x=loaded_model.predict([[1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 1, 0]])

# Create the Flask app
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the prediction data from the request
    data = request.json
    data=np.reshape(data,(1,20))

    # Make predictions using the loaded model
    
    #input_data = (data['input'])

    # Make predictions using the loaded model
  
    predictions = np.argmax(loaded_model.predict(data))
    target=["vata","pitta","kapha","vata+pitta","vata+kapha","pitta+kapha"]
    print(target[predictions])
    
        
        

    # Process the predictions as needed
    

    # Return the predictions as a response
    response = {
        'predictions': target[predictions]
    }
    return jsonify(response)

if __name__ == '__main__':
    # Run the Flask app on a local development server
    app.run()



