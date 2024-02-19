export const apiKey = 'b0f7ef84-4f1b-41b0-b069-70d059f53b0e';

export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    //To get the comments from API and store it in a variable to retrieve required data from the response
    getComments = async () => {
        try {
            const commentData = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            return commentData.data;
        }
        catch (error) {
            console.log("Failed to load comments:" + error);
        }
    }

    //To get the shows list from the API and store it in a variable to retrieve data
    getShows = async () => {
        try {
            const showsData = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return showsData.data;
        }
        catch (error) {
            console.log("Failed to get the comments: " + error);
        }
    }

    //To post the comment passed as a paramemter to the API and store there
    postComments = async (comment) => {
        try {
            const postComment = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            return postComment.data;
        }
        catch (error) {
            console.log("Failed to post the comment: " + error);
        }
    }

    //To like the comment for the userID passed as parameter and return the response to the calling environment to fetch the updated like count
    likeComment =async (userID) => {
        try {
            const likeComment = await axios.put(`${this.baseUrl}/comments/${userID}/like?api_key=${this.apiKey}`);
            return likeComment.data;
        }
        catch (error) {
            console.log("Failed to like the comment: " + error);
        }
    }

    //To delete the comment of the userID passed as parameter and return the response to the calling environment
    deleteComment =async (userID) => {
        try {
            const likeComment = await axios.delete(`${this.baseUrl}/comments/${userID}?api_key=${this.apiKey}`);
            return likeComment.data;
        }
        catch (error) {
            
            console.log("Failed to delete the comment: " + error);
        }
    }
}