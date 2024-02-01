import React from 'react'
import ArtistData from '../../../Components/ArtistData'
import { Link, useParams } from 'react-router-dom';
import UseRequestApi from '../../../Api/api';

const Artist = () => {
    const { dataArtist, dataSongs, dataAlbuns, getDataAll } = UseRequestApi()
    const { id } = useParams()
    console.log("artista Id: ", id)


    React.useEffect(() => {
        getDataAll(id)
        console.log(dataAlbuns)
        console.log(dataSongs.length)
    }, [])

    if (dataSongs.length === 0) {
        return (
            <>
                <Link to="/">Voltar</Link>
                <h1>Nothing Found</h1>
            </>
        )
    } else {
        return (
            <div>
                <Link to="/">Voltar</Link>
                <h1>{dataArtist}</h1>
                <p>{JSON.stringify(dataAlbuns)}</p>
                {dataSongs.map((title, index) => (
                    <p key={index + title}>{title}</p>
                ))}
                <ArtistData />
            </div>
        )
    }
}

export default Artist