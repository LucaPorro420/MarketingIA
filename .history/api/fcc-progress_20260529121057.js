import fetch from 'node-fetch';

// Configuración de credenciales de Zernio
const ZERNIO_API_KEY = process.env.ZERNIO_API_KEY; 
const INSTAGRAM_ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID;
const TWITTER_ACCOUNT_ID = process.env.TWITTER_ACCOUNT_ID;

export default async function handler(req, res) {
    // Vercel maneja los métodos mediante condicionales
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
    }

    try {
        const { username, completedChallenge } = req.body;

        if (!username || !completedChallenge) {
            return res.status(400).json({ error: "Faltan datos del progreso" });
        }

        const courseName = completedChallenge.block ? completedChallenge.block.toLowerCase() : "";
        const challengeTitle = completedChallenge.title;

        // 1. Personalizar el mensaje según el curso detectado
        let message = "";
        if (courseName.includes("web-design")) {
            message = `💻 ¡Progreso en freeCodeCamp! Acabo de completar "${challengeTitle}" en el curso de Diseño Web Responsivo. #DesarrolloWeb #Code`;
        } else if (courseName.includes("english")) {
            message = `🇬🇧 Learning English! Completé la lección "${challengeTitle}" en freeCodeCamp. #LearnEnglish #English`;
        } else {
            message = `🚀 ¡Un paso más cerca! Completé "${challengeTitle}" en freeCodeCamp. @freeCodeCamp`;
        }

        // 2. Estructurar el payload exacto para la API de Zernio
        const zernioPayload = {
            content: message,
            platforms: [
                { platform: "twitter", accountId: TWITTER_ACCOUNT_ID },
                { platform: "instagram", accountId: INSTAGRAM_ACCOUNT_ID }
            ],
            publish_now: true
        };

        // 3. Enviar la petición autenticada a Zernio (Importante usar el PATH real /api/posts/create)
        const response = await fetch('https://zernio.com', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ZERNIO_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(zernioPayload)
        });

        const data = await response.json();

        return res.status(200).json({ 
            status: "Success", 
            message: "Publicación enviada a Zernio con éxito",
            zernio_response: data 
        });

    } catch (error) {
        console.error("Error procesando el webhook:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
