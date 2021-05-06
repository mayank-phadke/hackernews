import axios from "axios"

const hackerNewsAPI = {
    getTopStories: () => {
        return new Promise((resolve, reject) => {
            axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    },
    
    getAskStories: () => {
        return new Promise((resolve, reject) => {
            axios.get("https://hacker-news.firebaseio.com/v0/askstories.json")
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    },

    getShowStories: () => {
        return new Promise((resolve, reject) => {
            axios.get("https://hacker-news.firebaseio.com/v0/showstories.json")
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    },

    getJobStories: () => {
        return new Promise((resolve, reject) => {
            axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json")
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    },

    getItemById: (itemId) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                });
        })
    }
}

export default hackerNewsAPI;
