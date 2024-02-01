import React from "react";
import axios from "axios";




const UseRequestApi = () => {
    const URL = "http://ec2-44-204-53-62.compute-1.amazonaws.com/api/"
    const [loading, setLoading] = React.useState(false)
    const [searchData, getSearchData] = React.useState(null)
    const [dataSongs, getDataSongs] = React.useState([])
    const [dataAlbuns, getDataAlbuns] = React.useState([])
    const [dataArtist, getDataArtist] = React.useState(null)

    const api = axios.create({
        baseURL: URL,
        'Content-Type': "application/json"
    })

    const GetDataSearchType = async (type) => {
        try {
            const res = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": type
                    }
                }
            });

            if (res.data != null) {
                getSearchData(res.data.result)
            }

        } catch (error) {
            console.error(error)
        }

    }

    const getDataAll = async (keyArtist) => {
        setLoading(true)

        const songTitles = []
        const albumTitles = []

        try {
            const resSong = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": "song"
                    }
                }
            });
            const resAlbum = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": "album"
                    }
                }
            });
            const resArtist = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": "artist"
                    }
                }
            });



            resSong.data.result.map(i => {
                console.log(i.title || i.name)
                if (i.artists[0]["@key"] === keyArtist) {
        
                        songTitles.push(i.title || i.name)
           
                }
            })

            resAlbum.data.result.map(i => {
                if (i.artist["@key"] === keyArtist) {
                    albumTitles.push(i.title || i.name)
                }
            })

            resArtist.data.result.map(i => {
                if (i["@key"] === keyArtist) {
                    getDataArtist(i.name)
                }
            })



            getDataSongs([...dataSongs, ...songTitles])
            getDataAlbuns([...dataAlbuns, ...albumTitles])

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }

    }
    return {
        loading,
        searchData,
        GetDataSearchType,
        dataArtist,
        dataSongs,
        dataAlbuns,
        getDataAll,

    }
}

export default UseRequestApi;
