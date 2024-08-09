import axios from 'axios';
export const getAllMovies = async () => {
    console.log("calling to getAllMovies");
    const res = await axios.get("http://localhost:5000/movie")
    .catch((err) => console.log(err));
    console.log(res)

    if (res.status !== 200) {
        return console.log("No Data");
    }
        const data = await res.data;
        return data;
    
};