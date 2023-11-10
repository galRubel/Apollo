from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8000"}})

class IA:
    def __init__(self, model_path: str):
        self.model = load_model(model_path)

    def predecir(self, data):
        return self.model.predict(data).tolist()

@app.route('/predecir/', methods=['POST'])
def read_link():
    data = request.form

    data_dict = {
        'Edad': [int(data['edad_input'])],
        'Altura': [int(data['altura_input'])],
        'Peso': [float(data['peso_input'])],
        'Ejercicio': [int(data['ejercicio_input'])],
        'Piedras': [int(data['piedras_input'])],
        'Días cigarillos': [int(data['dias_cigarrillos_input'])],
        'Cigarrillos/d': [int(data['cigarrillos_por_dia_input'])],
        'Días alcohol': [int(data['dias_alcohol_input'])],
        'Alcohol/d': [int(data['alcohol_por_dia_input'])],
        'Comida no casera': [int(data['comida_no_casera_input'])],
        'Comida rápida': [int(data['comida_rapida_input'])],
        'Comida lista': [int(data['comida_lista_input'])],
        'Comida congelada': [int(data['comida_congelada_input'])],
        'Debiles_-1': [int(data['debiles_menos1'])],
        'Debiles_1': [int(data['debiles_1'])],
        'Debiles_2': [int(data['debiles_2'])],
        'Debiles_9': [int(data['debiles_9'])],
        'Dialisis_-1': [int(data['dialisis_menos1'])],
        'Dialisis_1': [int(data['dialisis_1'])],
        'Dialisis_2': [int(data['dialisis_2'])]
    }
    model1 = IA("modelofachero1.h5")
    model2 = IA("modelofachero2.h5")

    data_input = pd.DataFrame(data_dict)

    prediction1 = model1.predecir(data_input)
    prediction2 = model2.predecir(data_input)

    return jsonify({"Prediction_Model_1": prediction1, "Prediction_Model_2": prediction2})

    #data_input = pd.DataFrame(data_dict)

    #return jsonify({"Prediction": model1.predecir(data_input), "Prediction": model2.predecir(data_input)})


@app.route("/", methods=['GET'])
def root():
    return jsonify({"Hello TIC, we are Apollo!"})


if __name__ == "__main__":
    app.run(debug=True)
#postman
    #./venv/Scrpits/activate siempre que abro y uvicorn main:app --reload
    #pip install -r requirments.txt
    #python -m venv venv
    #./activate
    #c:/Users/47695661/Desktop/fastApi/venv/Scripts/Activate.ps1