import React from "react";
import axios from "axios";




const UseRequestApi = () => {
    const URL = "http://ec2-44-204-53-62.compute-1.amazonaws.com/api/"
    const [loading, setLoading] = React.useState(false)
    const [searchData, getSearchData] = React.useState(null)
    const [dataSongs, getDataSongs] = React.useState(null)
    const [dataAlbuns, getDataAlbuns] = React.useState(null)
    const [dataArtist, getDataArtist] = React.useState(null)


    const api = axios.create({
        baseURL: URL,
        'Content-Type': "application/json"
    })
    //Used only in Home Push
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
    // allgets in page
    const getDataAll = async (keyArtist) => {
        setLoading(true)

        const songTitles = []
        const albumTitles = []

        try {
            const resSong = await api.post("query/search", {

                "query": {
                    "selector": {
                        "@assetType": "song",
                        "artists": [
                            {
                                "@assetType": "artist",
                                "@key": keyArtist
                            }
                        ]

                    }
                }
            });
            const resAlbum = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": "album",
                        "artist": {
                            "@key": keyArtist
                        }
                    }
                }
            });
            const resArtist = await api.post("query/search", {
                "query": {
                    "selector": {
                        "@assetType": "artist",
                        "@key": keyArtist
                    }
                }
            });


            getDataSongs(resSong.data.result)

            getDataAlbuns(resAlbum.data.result)

            getDataArtist(resArtist.data.result)


        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }
    // DeleteActons

    const DeleteArtist = async (name, id) => {
        setLoading(true)

        try {
            const bodyData = {
                "key": {
                    "@assetType": "artist",
                    "id": id,
                    "name": name
                }
            }
            const res = await api.delete("invoke/deleteAsset", { data: bodyData })
            alert(res.data)

        } catch (error) {
            console.error(error)
            if (error.response.status === 400) {
                alert("Need Delete the Album/Songs first")
            }
        } finally {
            setLoading(false)
        }
    }

    const DeleteAlbum = async (data) => {
        const { title, artistId } = data
        setLoading(true)

        try {
            const bodyData = {
                "key": {
                    "@assetType": "album",
                    "title": title,
                    "artist": {
                        "@assetType": "artist",
                        "@key": artistId
                    }
                }
            }
            const res = await api.delete("invoke/deleteAsset", { data: bodyData })
            alert(res.data)

        } catch (error) {
            console.error(error)
            if (error.response.status === 400) {
                alert("Need Delete the Songs first")
            }
        } finally {
            setLoading(false)
        }
    }

    const DeleteSong = async (data) => {
        const { title, albumId, artistId } = data
        setLoading(true)

        try {
            const bodyData = {
                "key": {
                    "@assetType": "song",
                    "title": title,
                    "album": {
                        "@assetType": "album",
                        "@key": albumId
                    },
                    "artists": [
                        {
                            "@assetType": "artist",
                            "@key": artistId
                        }
                    ]
                }
            }
            const res = await api.delete("invoke/deleteAsset", { data: bodyData })
            alert(res.data)

        } catch (error) {
            console.error(error)
            if (error.response.status === 400) {
                alert("Something Wrong")
            }
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
        DeleteArtist,
        DeleteSong,
        DeleteAlbum,

    }
}

export default UseRequestApi;
