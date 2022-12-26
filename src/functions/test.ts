
export default async function getTest() {
    try {
        const response = await fetch('http://localhost:8080/test', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

    })

    return  await response.json()
    } catch (error) {
        
    }
 }