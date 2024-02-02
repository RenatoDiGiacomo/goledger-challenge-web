import React from 'react'
import ArtistData from '../../../Components/ArtistData'
import { Link, useParams } from 'react-router-dom';
import UseRequestApi from '../../../Api/api';
import Loading from '../../../Components/Loading';

const Artist = () => {
    const { loading, dataArtist, dataSongs, dataAlbuns, getDataAll } = UseRequestApi()
    const { id } = useParams()

    React.useEffect(() => {
        getDataAll(id)
    }, [])

    if (!loading) {
        if (dataSongs === null || dataArtist === null) {
            return (
                <>
                    <Link to="/">Voltar</Link>
                    <h1>{dataArtist.name}</h1>
                    <h1>{dataArtist.id}</h1>
                    <p>No songs Found</p>
                </>
            )
        } else {
            return (
                <div>
                    <Link to="/">Voltar</Link>
                    <h1>{dataArtist.name}</h1>
                    <ArtistData dataSongs={dataSongs} dataAlbuns={dataAlbuns} />
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