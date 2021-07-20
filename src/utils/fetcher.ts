const fetcher = async (path:String) => {
    const response = await fetch('https://nymcard.com/api/' + path)
    const data = await response.json();
    return data;
}

export { fetcher }