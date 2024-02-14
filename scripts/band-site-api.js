export const apiKey = 'b0f7ef84-4f1b-41b0-b069-70d059f53b0e';

export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    getComments = async () => {
        try {
            const commentData = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            return commentData.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    getShows = async () => {
        try {
            console.log("hey");
            const showsData = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return showsData.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    postComments = async (comment) => {
        try {
            const postComment = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            return postComment.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    likeComment =async (userID) => {
        try {
            // this.userID = userID;
            const likeComment = await axios.put(`${this.baseUrl}/comments/${userID}/like?api_key=${this.apiKey}`);
            return likeComment.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    deleteComment =async (userID) => {
        try {
            // this.userID = userID;
            const likeComment = await axios.delete(`${this.baseUrl}/comments/${userID}?api_key=${this.apiKey}`);
            return likeComment.data;
        }
        catch (error) {
            console.log(error);
        }
    }
}

// const apiClient = new BandSiteApi(apiKey);
// apiClient.getComments();