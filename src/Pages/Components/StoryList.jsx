import React from "react"
import StoryItem from "./StoryItem"
import hackerNewsAPI from "../../API/hackerNewsAPI";
import LoadingSpinner from "../../Components/LoadingSpinner";

export default class StoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storyArray: [],
            loading: true
        }

        this.fetchDataForEachStory = this.fetchDataForEachStory.bind(this)
    }

    componentDidMount() {
        this.fetchDataForEachStory(this.props.storyIdArray)
    }

    componentDidUpdate(prevProps) {
        if(!this.areStoryArraysEqual(this.props.storyIdArray, prevProps.storyIdArray)) {
            this.fetchDataForEachStory(this.props.storyIdArray)
        }
    }

    fetchDataForEachStory(storyIdArray) {
        let storyArray = [];
        let promiseList = [];
        storyIdArray.forEach((storyId) => {
            let promise = hackerNewsAPI.getItemById(storyId)
                .then((storyData) => { storyArray.push(storyData) });
            promiseList.push(promise)
        })

        Promise.all(promiseList).then(() => {
            this.setState({
                storyArray: storyArray,
                loading: false
            })
        })
    }

    areStoryArraysEqual(array1, array2) {
        if(array1 === array2) return true

        return array1.every((id1, index) => {
            return id1 === array2[index]
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <LoadingSpinner />
            )
        }

        let dataToDisplay = this.state.storyArray.filter(this.filterStories.bind(this));

        return (
            <>
                {
                    dataToDisplay.length === 0 ?
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            No Results.
                        </div> :
                        dataToDisplay.map((story, i) => {
                            return (
                                <div key={i}>
                                    <StoryItem
                                        title={story.title}
                                        url={story.url}
                                        points={story.score}
                                        author={story.by}
                                        time={story.time}
                                        comments={story.descendants} />
                                </div>
                            )
                        })

                }
            </>
        )
    }

    filterStories(story) {
        if(!story) return null
        return (
            story.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()) ||
            story.by.toLowerCase().includes(this.props.searchQuery.toLowerCase())
        )
    }
}
