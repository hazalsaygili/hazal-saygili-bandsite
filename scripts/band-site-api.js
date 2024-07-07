class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        let url = this.baseUrl + "comments" + "?api_key=" + this.apiKey;
        let response = await axios.get(url);
        console.log(response);
        let data = response.data;
        data.sort((a,b) =>{
            return b.timestamp - a.timestamp;
        })
        return data;

    }

    async postComment(comment) {
        let url = this.baseUrl + "comments" + "?api_key=" + this.apiKey;
        let response = await axios.post(url, comment);
        console.log(response);
        let data = response.data;
        return data;
    }

    async getShows() {
        let url = this.baseUrl + "showdates" + "?api_key=" + this.apiKey;
        let response = await axios.get(url);
        console.log(response);
        let data = response.data;
        data.sort((a,b) =>{
            return a.date - b.date;
        })
        return data;

    }

}


export default BandSiteApi;

