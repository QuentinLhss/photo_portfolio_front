import config from "../config";

const fetchPictures = async (params = null) => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const request = await fetch(`${config.api}/api/Pictures?populate=*&${params}`, reqOptions);
    const response = await request.json();

    return response;

}

export default fetchPictures