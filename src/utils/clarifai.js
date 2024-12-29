export const analyzeFoodImage = async (base64Image) => {
    try {
        const response = await fetch('/api/analyze-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ base64Image })
        });

        const result = await response.json();
        console.log('API Response:', result); // Debug log

        if (!result.outputs) {
            console.error('No outputs in response:', result);
            throw new Error('Invalid response structure from API');
        }

        if (!result.outputs[0].data.concepts) {
            console.error('No concepts in response:', result.outputs[0]);
            throw new Error('No concepts found in response');
        }

        return result.outputs[0].data.concepts;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
};