// functions/sendEmail.js
const emailjs = require('emailjs');

exports.handler = async (event, context) => {
  // Récupère les données du formulaire depuis la requête HTTP
  const formData = JSON.parse(event.body);

  // Effectuez l'envoi d'e-mail en utilisant EmailJS ou une autre bibliothèque
  // Utilisez ici les clés d'API en toute sécurité
  try {
    const response = await emailjs.sendForm(
      'service_8sp4iwj',
      'template_8ugzjf4',
      formData,
      'sJjG3ekibSeUeWPHY'
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'E-mail envoyé avec succès' }),
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi d\'e-mail:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Erreur lors de l\'envoi d\'e-mail' }),
    };
  }
};
