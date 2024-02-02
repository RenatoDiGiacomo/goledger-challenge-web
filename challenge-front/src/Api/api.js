import React from "react";
import axios from "axios";




const UseRequestApi = () => {
    const URL = "http://ec2-44-204-53-62.compute-1.amazonaws.com/api/"
    const [loading, setLoading] = React.useState(false)
    const [searchData, getSearchData] = React.useState(null)
    const [dataSongs, getDataSongs] = React.useState([])
    const [dataAlbuns, getDataAlbuns] = React.useState(null)
    const [dataArtist, getDataArtist] = React.useState({ name: "", id: "" })


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
                if (i.artists[0]["@key"] === keyArtist) {
                    getDataSongs((prev => [...prev, i]))
                    console.log(i)
                }
            })

            resAlbum.data.result.map(i => {
                if (i.artist["@key"] === keyArtist) {
                    getDataAlbuns(i)
                }
            })

            resArtist.data.result.map(i => {
                if (i["@key"] === keyArtist) {
                    getDataArtist({ name: i.name, id: i["@key"] })
                }
            })

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
