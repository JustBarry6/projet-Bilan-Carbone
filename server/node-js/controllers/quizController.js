const cors = require('cors');
const axios = require('axios');

const { sendQuizResultEmail } = require("../services/emailService");

exports.sendResultEMail = async function(req, res) {
  //console.log(req);
  try {
    await sendQuizResultEmail(req.body.email, req.body.resultResponse, req.body.resultRequest);
    res.send({
      success: true,
      mail: req.body.email
     });
  } catch(e) {
    res.status(500).send({
      success: false,
      mail: req.body.email
     });
  }
 }



 exports.calculateresult = async (req, res) => {
  const flaskServer = process.env.FLASK_SERVER;
  try {
    //console.log(req.body);
    try {
      const data = req.body;
      // Appel à l'endpoint Flask pour calculer l'empreinte carbone
      const flaskResponse = await axios.post(`${flaskServer}/api/calcul_emission`, data);
      
    
    let emissionBudget = 0;
    if (req.body.budget) {
      emissionBudget = parseFloat(((req.body.budget / 1000) * 1.9).toFixed(3));
    }

    //pour  esult:[]}
    res.send({
      result: [
        {
          label: "Transport",
          id: "transport",
          value: flaskResponse.data.Transport,
          color: "rgb(255, 99, 132)",
        },
        {
          label: "Alimentation",
          id: "alimentation",
          value: flaskResponse.data.Alimentation,
          color: "rgb(54, 162, 235)",
        },
        {
          label: "Logement",
          id: "logement",
          value: flaskResponse.data.Logement,
          color: "red",
        },
        {
          label: "Biens",
          id: "biens",
          value: flaskResponse.data.Biens,          
          color: "lightgreen",
        },
        {
          label: "Services",
          id: "services",
          value: flaskResponse.data.Services,          
          color: "yellow",
        },
      ],
      budget: emissionBudget,
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
}
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: err.message }); // Renvoyer un code d'erreur 500 en cas d'erreur
  }
}

/* Bilan Normal*/


exports.calculateresult2 = async (req, res) => {
  const flaskServer2 = process.env.FLASK_SERVER_2;
  try {
    const data = req.body;
    const flaskResponse2 = await axios.post(`${flaskServer2}/api/calcul_emission_2`, data);

    let emissionBudget2 = 0;
    if (req.body.budget) {
      emissionBudget2 = parseFloat(((req.body.budget / 1000) * 2.1).toFixed(3));
    }

    res.send({
      result: [
        {
          label: "Transport",
          id: "transport",
          value: flaskResponse2.data.Transport,
          color: "rgb(255, 99, 132)",
        },
        {
          label: "Alimentation",
          id: "alimentation",
          value: flaskResponse2.data.Alimentation,
          color: "rgb(54, 162, 235)",
        },
        {
          label: "Logement",
          id: "logement",
          value: flaskResponse2.data.Logement,
          color: "red",
        },
        {
          label: "Biens",
          id: "biens",
          value: flaskResponse2.data.Biens,
          color: "lightgreen",
        },
        {
          label: "Services",
          id: "services",
          value: flaskResponse2.data.Services,
          color: "yellow",
        },
      ],
      budget: emissionBudget2,
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};