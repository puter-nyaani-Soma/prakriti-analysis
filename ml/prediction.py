import tensorflow as tf
import numpy as np
loaded_model = tf.keras.models.load_model('ml/prakriti-model')
x=loaded_model.predict([[1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 1, 0]])


print(np.argmax(x))