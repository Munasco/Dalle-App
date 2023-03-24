export async function GET(request: Request) {

    //Connect to Microsoft Azure Function Endpoint
    const response = await fetch(
        'https://dalle-app-generator.azurewebsites.net/api/getchatgptsuggestion', {
            cache: 'no-store'
        }
    )

    const textData = await response.text();
    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    })
}
