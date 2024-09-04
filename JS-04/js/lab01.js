async function getImage() {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    const image = res.data.message
}