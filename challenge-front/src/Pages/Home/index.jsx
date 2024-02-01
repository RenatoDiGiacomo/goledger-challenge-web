import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import UseRequestApi from "../../Api/api.js"
import ArtistsContainer from '../../Components/ArtistContainer';

const Home = () => {
    const [searchSelect, getSearchSelect] = React.useState("artist")
    const { searchData, GetDataSearchType } = UseRequestApi();


    React.useEffect(() => {
        GetDataSearchType("artist")

    }, [searchSelect])

    // Neede Take from DATABASE the right schema
    const selectListSchema = [
        {
            "tag": "artist",
            "label": "Artist",
            "description": "",
            "writers": null
        },
        {
            "tag": "album",
            "label": "Album",
            "description": "",
            "writers": null
        },
        {
            "tag": "song",
            "label": "Song",
            "description": "",
            "writers": null
        },
        {
            "tag": "playlist",
            "label": "Playlist",
            "description": "",
            "writers": null
        }
    ]



    return <ArtistsContainer data={searchData} />


}

export default Home