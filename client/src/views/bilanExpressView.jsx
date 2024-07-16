import React, {useState} from "react";
import BilanComponent from "../components/bilan/bilanComponent";
import BilanResultComponent from "../components/bilan/bilanResultComponent";
import IntermediairePage from "../components/bilan/IntermediairePage";
import Habit from "../img/vet.png";
import Vegetarien from "../img/vege.png";
import Transport from "../img/transport.png";
import TGV from "../img/tgv.png";
import Logement from "../img/loge.png";
import Internet from "../img/internet.png";
import Spe from "../img/interog.png";
import VoitureVac from "../img/grandep.png";
import Express from "../img/Express.png";
import Electro from "../img/electro.png";
import Eau from "../img/eau.png";
import Chauffage from "../img/chaff.png";
import Boisson from "../img/bois.png";
import Avion from "../img/avion.png";
import Voiture from "../img/voiture.png";
import Budget from "../img/budg.png";

export default function BilanExpressView() {
  let welcomePageContent = {
    title: "Bilan carbone en 3 minutes",
    description: "Le bilan carbone express vous aide à mesurer vos émissions de CO2 en explorant vos habitudes de transport, de logement, d'alimentation et de consommation.",
    image: Express,
  };



    let questionsList = [
        {
            id: "transport",
            type: "radio",
            title: "Pour vous rendre sur votre lieu de travail, à l'université ou à l'école, comment vous déplacez-vous ?",
            description: "",
            image:Transport,
            option: [
                {
                    title: "Transports en commun (Bus, Tram, RER, Métro)",
                    value: "transports_commun",
                    subQuestion: [
                        {
                            id: "transport_commun_aller_retour",
                            title: "Combien de kilomètres aller-retour avec les transports en commun ? ",
                            type: "number",
                            description: "",
                        },
                    ]
                },
                {
                    title: "Vélo, de la marche à pied ",
                    value: "velo/pied",
                },
                {
                    title: "Voiture",
                    value: "voiture",
                    subQuestion: [
                        {
                            id: "voiture_covoiturage",
                            title: "Faites-vous du Covoiturage ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                    subQuestion: [
                                        {
                                            id: "voiture_covoiturage_personne",
                                            title: "Avec combien de personnes en général ?",
                                            type: "number",
                                            description: "",
                                        }
                                    ]
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]
                        },
                        {
                            id: "voiture_km",
                            title: "Combien de kilomètres aller-retour avec la voiture ?",
                            type: "number",
                            description: "",
                        },
                    ]
                },
            ],
        },
        {
            id: 'transport_weekend',
            title: 'Pour vos déplacements du week-end, quel mode de transport privilégiez-vous ?',
            type: "radio",
            description: "",
            image: Voiture,
            option: [
                {
                    title: "Transports en commun (Bus, Tram, RER, Métro)",
                    value: "transports_weekend_commun",
                    subQuestion: [
                        {
                            id: "transport_weekend_commun_aller_retour",
                            title: "Combien de kilomètres aller-retour avec les transports en commun ?",
                            type: "number",
                            description: "",
                        },
                    ]
                },
                {
                    title: "Vélo, de la marche à pied ",
                    value: "velo/pied",
                },
                {
                    title: "Voiture",
                    value: "voiture",
                    subQuestion: [
                        {
                            id: "voiture_weekend_covoiturage",
                            title: "Faites-vous du Covoiturage ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                    subQuestion: [
                                        {
                                            id: "voiture_weekend_covoiturage_personne",
                                            title: "Avec combien de personnes en général ?",
                                            type: "number",
                                            description: "",
                                        }
                                    ]
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]
                        },
                        {
                            id: "voiture_weekend_km",
                            title: "Combien de kilomètres aller-retour avec la voiture ?",
                            type: "number",
                            description: "",
                        },
                    ]
                },
            ],
        },
        {
            id: "grand_deplacement_avion",
            title: "Pour les grands déplacements, prenez-vous l'avion ?",
            type: "radio",
            description: "",
            image:Avion,
            option: [
                {
                    title: "Oui",
                    value: "oui",
                    subQuestion: [
                        {
                            id: "grand_deplacement_avion_km",
                            title: "Combien de kilomètres parcourez-vous en moyenne par an (aller-retour) en avion ?",
                            type: "number"
                        }
                    ]
                },
                {
                    title: "Non",
                    value: "non"
                }
            ]
        },   
        {
            id: "grand_deplacement_train",
            title: "Pour les grands déplacements, voyagez-vous en TGV ?",
            type: "radio",
            description: "",
            image:TGV,
            option: [
                {
                    title: "Oui",
                    value: "oui",
                    subQuestion: [
                        {
                            id: "grand_deplacement_train_km",
                            title: "Combien de kilomètres parcourez-vous en moyenne par an (aller-retour) en train ?",
                            type: "number"
                        }
                    ]
                },
                {
                    title: "Non",
                    value: "non"
                }
            ]
        },
        
        {
            id: "grand_deplacement_voiture",
            title: "Pour les grands déplacements, prenez-vous la voiture ?",
            type: "radio",
            description: "",
            image:VoitureVac,
            option: [
                {
                    title: "Oui",
                    value: "oui",
                    subQuestion: [
                        {
                            id: "voiture_grand_deplacement_covoiturage",
                            title: "Faites-vous du Covoiturage ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                    subQuestion: [
                                        {
                                            id: "voiture_grand_deplacement_covoiturage_personne",
                                            title: "Avec combien de personnes en général ?",
                                            type: "number",
                                            description: "",
                                        }
                                    ]
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]
                        },
                        {
                            id: "voiture_grand_deplacement_km",
                            title: "Combien de kilomètres parcourez-vous en moyenne par an (aller-retour) uniquement pour les vacances ? ",
                            type: "number",
                            description: "",
                        },
                    ]
                },
                {
                    title: "Non",
                    value: "non"
                }
            ]
        },
        {
            id: "logement",
            type: "radio",
            title: "Quel est le type de votre logement ?",
            description: "",
            image: Logement,
            option: [
                {
                    title: "Dans une maison en famille ou en colocation",
                    value: "Dans une maison en colocation",
                    subQuestion: [
                        {
                            id: "logement_recent",
                            title: "Votre logement est-il récent (construit après les années 2000) ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]    
                        }
                    ]
                },
                {
                    title: "Dans un appartement en famille ou en colocation",
                    value: "Dans un appartement en colocation",
                    subQuestion: [
                        {
                            id: "logement_recent",
                            title: "Votre logement est-il récent (construit après les années 2000) ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]    
                        }
                    ]
                },
                {
                    title: "Seul(e) dans un appartement",
                    value: "Seul(e) dans un appartement",
                    subQuestion: [
                        {
                            id: "logement_recent",
                            title: "Votre logement est-il récent (construit après les années 2000) ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]    
                        }
                    ]
                },
            ],
        },
        {
            id: "logement_chauffage",
            type: "radio",
            title: "Comment votre logement est-il chauffé ?",
            description: "",
            image: Chauffage,
            option: [
                {
                    title: "Fioul",
                    value: "Fioul",
                },
                {
                    title: "Gaz",
                    value: "Gaz",
                },
                {
                    title: "Electricité",
                    value: "Electricité",
                },
                {
                    title: "Je ne sais pas",
                    value: "Je ne sais pas",
                },
            ],
        },
        {
            id: "logement_equipements",
            type: "checkbox",
            title: "Quels équipements électroménagers utilisez-vous parmi les suivants ?",
            description: "",
            image: Electro,
            option: [
                {
                    title: "Four",
                    value: "Four",
                },
                {
                    title: "Réfrigérateur",
                    value: "Réfrigérateur",
                },
                {
                    title: "Aspirateur",
                    value: "Aspirateur",
                },
                {
                    title: "Lave-linges",
                    value: "Lave-linges",
                },
                {
                    title: "Sèche-linge",
                    value: "sèche-linges",
                },
                {
                    title: "Lave-vaisselle",
                    value: "Lave-vaisselles",
                },
                {
                    title: "TV",
                    value: "TV",
                },
                {
                    title: "Smartphone",
                    value: "Smartphone",
                },
                {
                    title: "Ordinateurs/PC",
                    value: "Ordinateurs/PC",
                },
            ],
        },
        {
            id: "regime_alimentaire",
            title: "Êtes-vous végétarien ?",
            type: "radio",
            description: "",
            image:Vegetarien,
            option: [
                {
                    title: "Non",
                    value: "non",
                    subQuestion: [
                        {
                            id: "consommation_viande_rouge",
                            title: "À quelle fréquence consommez-vous de la viande rouge ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "1 à 2 fois par semaine",
                                    value: "1 à 2 fois par semaine",
                                },
                                {
                                    title: "3 à 4 fois par semaine",
                                    value: "3 à 4 fois par semaine"
                                },
                                {
                                    title: "Plus de 4 fois par semaine",
                                    value: "Plus de 4 fois par semaine"
                                }
                            ]
                        },
                    ]
                },
                {
                    title: "Oui",
                    value: "oui"
                }
            ]
        },
        {
            id: "Alimentation_eau",
            type: "radio",
            title: "Buvez-vous généralement de l'eau du robinet ou de l'eau en bouteille ?",
            description: "",
            image:Eau,
            option: [
                {
                    title: "Eau du robinet",
                    value: "Eau du robinet",
                },
                {
                    title: "Eau en bouteille",
                    value: "Eau en bouteille",
                },
            ],
        },
        {
            id: "Alimentation_Boissons",
            type: "checkbox",
            title: "Quelles boissons chaudes consommez-vous ? ",
            description: "",
            image: Boisson,
            option: [
                {
                    title: "Café",
                    value: "Café",
                },
                {
                    title: "Thé",
                    value: "Thé",
                },
                {
                    title: "Chocolat",
                    value: "Chocolat",
                },
                {
                    title: "Aucune",
                    value: "Aucune",
                  },
            ],
        },
        {
            id: "divers_textile",
            type: "radio",
            title: "En moyenne, combien de vêtements achetez-vous par mois ?",
            description: "",
            image: Habit,
            option: [
                {
                    title: "Moins de 2",
                    value: "Moins de 2",
                },
                {
                    title: "Entre 2 et 5",
                    value: "Entre 2 et 5",
                },
                {
                    title: "Plus de 5",
                    value: "Plus de 5",
                },
            ],
        },
        {
            id: "utilisation_streaming",
            type: "radio",
            title: "Regardez-vous des vidéos en streaming (Netflix, YouTube, etc.) ?",
            description: "",
            image: Internet,
            option: [
              {
                title: "Oui",
                value: "oui",
                subQuestion: [
                  {
                    id: "streaming_heure_jour",
                    type: "radio",
                    title: "Combien d'heures par jour passez-vous en streaming vidéo ?",
                    description: "La durée de streaming vidéo a un impact significatif sur votre empreinte carbone.",
                    option: [
                        { title: "Moins de 30 minutes", value: "moins_30m" },
                        { title: "30 minutes à 3 heures", value: "30m_3h" },
                        { title: "3 heures à 6 heures", value: "3h_6h" },
                        { title: "Plus de 6 heures", value: "plus_6h" }
                    ]
                  },
                  {
                    id: "streaming_appareil",
                    type: "radio",
                    title: "Quel appareil utilisez-vous principalement pour le streaming vidéo ?",
                    description: "Le type d'appareil utilisé influence également les émissions de CO₂.",
                    option: [
                      { title: "Télévision", value: "television" },
                      { title: "Ordinateur portable", value: "ordinateur_portable" },
                      { title: "Smartphone", value: "smartphone" }
                    ]
                  },
                  {
                    "id": "connexion_streaming",
                    "type": "radio",
                    "title": "Quel type de connexion utilisez-vous pour le streaming vidéo ?",
                    "description": "Le type de connexion (Wi-Fi ou 4G/5G) a un impact sur les émissions de CO₂.",
                    "option": [
                      { "title": "Wi-Fi", "value": "wifi" },
                      { "title": "4G/5G", "value": "4g_5g" }
                    ]
                  }
                ]
              },
              {
                "title": "Non",
                "value": "non"
              }
            ]
          },
          {
            "id": "utilisation_reseaux_sociaux",
            "type": "radio",
            "title": "Utilisez-vous les réseaux sociaux ?",
            "description": "",
            "image": Internet,
            "option": [
              {
                "title": "Oui",
                "value": "oui",
                "subQuestion": [
                  {
                    "id": "reseaux_sociaux_heure_jour",
                    "type": "radio",
                    "title": "Combien d'heures par jour passez-vous sur les réseaux sociaux ?",
                    "description": "La durée passée sur les réseaux sociaux a un impact significatif sur votre empreinte carbone.",
                    "option": [
                      { "title": "Moins de 30 minutes", "value": "moins_30m" },
                      { "title": "30 minutes à 1 heure", "value": "30m_1h" },
                      { "title": "1 à 2 heures", "value": "1h_2h" },
                      { "title": "Plus de 2 heures", "value": "plus_2h" }
                    ]
                  }
                ]
              },
              {
                "title": "Non",
                "value": "non"
              }
            ]
          },
        {
            id: "budget",
            title: "Quels sont vos revenus/dépenses mensuels ?",
            type: "number",
            min: 0, // Added min attribute to prevent negative values
            description: "Nous demandons votre revenu mensuel uniquement pour estimer vos émissions de CO2 de votre budget. Ces informations ne seront pas conservées. Merci de votre compréhension.",
            image: Budget,
        },
        {
            image: Spe,
            list: [
                {
                    id: "nom",
                    title: "Quelle est votre Nom ?",
                    type: "text",
                    description: "",
                    optional: true
                },
                {
                    id: "specialite",
                    title: " Quel est votre niveau d'étude ou votre rôle ?",
                    type: "radio",
                    description: "",
                    option: [
                        {
                            title: "Ingénieurie ",
                            value: "ING",
                            subQuestion: [
                                {
                                    id: "spe_ING",
                                    title: "Quelle est votre spécialité ?",
                                    type: "radio",
                                    description: "",
                                    option: [
                                        {
                                            title: "Energétique",
                                            value: "Energétique"
                                        },
                                        {
                                            title: "Instrumentation",
                                            value: "Instrumentation"
                                        },
                                        {
                                            title: "MACS",
                                            value: "MACS"
                                        },
                                        {
                                            title: "Télecommunication & réseaux",
                                            value: "Télecommunication & réseaux"
                                        },
                                        {
                                            title: "Informatique",
                                            value: "Informatique"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Licence ",
                            value: "Licence",
                            subQuestion: [
                                {
                                    id: "spe_Licence",
                                    title: "Veuillez précisez votre spécialité ",
                                    type: "radio",
                                    description: "",
                                    option: [
                                        {
                                            title: "Informatique",
                                            value: "Informatique"
                                        },
                                        {
                                            title: "Mathématiques",
                                            value: "Mathématiques"
                                        },
                                        {
                                            title: "Physique Chimie",
                                            value: "Physique Chimie"
                                        },
                                        {
                                            title: "Science de l'ingénieure",
                                            value: "Science de l'ingénieurie"
                                        },
                                        {
                                            title: "Informatique & Mathématiques",
                                            value: "Informatique & Mathématiques"
                                        },
                                        {
                                            title: "CP2I",
                                            value: "CP2I"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Masters ",
                            value: "Masters",
                            subQuestion: [
                                {
                                    id: "spe_Masters",
                                    title: "Veuillez précisez votre spécialité ",
                                    type: "radio",
                                    description: "",
                                    option: [
                                        {
                                            title: "Informatique",
                                            value: "Informatique"
                                        },
                                        {
                                            title: "Mathématiques",
                                            value: "Mathématiques"
                                        },
                                        {
                                            title: "Science et génie des matériaux",
                                            value: "Science et génie des matériaux"
                                        },
                                        {
                                            title: "Ingénieurie et innovation en images et réseaux",
                                            value: "Ingénieurie et innovation en images et réseaux"
                                        },
                                        {
                                            title: "Génies des Procédés",
                                            value: "Génies des Procédés"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Personnels ou Enseignants",
                            value: "Personnels ou Enseignants"
                        },
                        {
                            title: "Autres",
                            value: "Autres"
                        }
                    ]
                }
            ]
        }
    ];

  const [userName, setUserName] = useState('');
  const [response, setResponse] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showIntermediaire, setShowIntermediaire] = useState(false);
  const [startQuestionnaire, setStartQuestionnaire] = useState(false);

  const handleResponseChange = (value) => {
    setResponse((prevResponse) => ({
      ...prevResponse,
      ...value,
      spe_Masters: value.spe_Masters || prevResponse.spe_Masters,
      spe_Licence: value.spe_Licence || prevResponse.spe_Licence,
      spe_ING: value.spe_ING || prevResponse.spe_ING
    }));
  };

  const handleTerminateChange = () => {
    setShowResult(true);
  };

  const handleContinue = () => {
    setShowIntermediaire(false);
    setStartQuestionnaire(true);
  };

  const handleStart = () => {
    setShowIntermediaire(true);
  };

  return (
    <div>
      {showResult === false && showIntermediaire === true && (
        <IntermediairePage
        onContinue={handleContinue}
        background="linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"
      />
      )}

      {showResult === false && showIntermediaire === false && startQuestionnaire === false && (
        <BilanComponent
          userName={userName}
          questionsList={questionsList}
          welcomeContent={welcomePageContent}
          onResponseChange={handleResponseChange}
          onTerminateClicked={handleTerminateChange}
          onStartClicked={handleStart} // Pass the new handler here
          background="linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"
        />
      )}

      {showResult === false && startQuestionnaire === true && (
        <BilanComponent
          userName={userName}
          questionsList={questionsList}
          welcomeContent={welcomePageContent}
          onResponseChange={handleResponseChange}
          onTerminateClicked={handleTerminateChange}
          background="linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"
          startImmediately={true} // Start immediately with the first question
        />
      )}

      {showResult && (
        <BilanResultComponent
          userName={userName}
          questionResponse={response}
        />
      )}

      {/* <hr />
      {JSON.stringify(response, null, 2)} */}
    </div>
  );
}