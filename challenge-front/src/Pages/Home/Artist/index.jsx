import React from 'react'
import ArtistData from '../../../Components/ArtistData'
import { Link, useParams } from 'react-router-dom';
import UseRequestApi from '../../../Api/api';
import Loading from '../../../Components/Loading';

const Artist = () => {
    const { loading, dataArtist, dataSongs, dataAlbuns, getDataAll } = UseRequestApi()
    const { id } = useParams()
    console.log("artista Id: ", id)


    React.useEffect(() => {
        getDataAll(id)
    }, [])
    if (!loading) {

        if (dataSongs.length === 0) {
            return (
                <>
                    <Link to="/">Voltar</Link>
                    <h1>{dataArtist}</h1>
                    <p>No songs Found</p>
                </>
            )
        } else {
            return (
                <div>
                    <Link to="/">Voltar</Link>
                    <h1>{dataArtist}</h1>
                    <ArtistData dataSongs={dataSongs} dataAlbuns={dataAlbuns}/>
                </div>
            )
        }
    } else {

        return (
            <Loading />
        )
    }

}

export default Artist