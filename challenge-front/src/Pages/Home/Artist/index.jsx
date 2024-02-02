import React from 'react'
import ArtistData from '../../../Components/ArtistData'
import { Link, useParams } from 'react-router-dom';
import UseRequestApi from '../../../Api/api';
import Loading from '../../../Components/Loading';
import { ArtistBackBtnSytled, ArtistContainerSytled } from './styled';

const Artist = () => {
    const { loading, dataArtist, dataSongs, dataAlbuns, getDataAll } = UseRequestApi()
    const { id } = useParams()

    React.useEffect(() => {
        getDataAll(id)
    }, [])

    // console.log(dataArtist, dataSongs, dataAlbuns)

    if (!loading) {
        return (
            <ArtistContainerSytled>
                    <ArtistBackBtnSytled to={"/"}>Back</ArtistBackBtnSytled>
                {dataArtist && dataArtist.map((item, index) => (
                    <ArtistData key={index} data={item} id={id} dataSongs={dataSongs} dataAlbuns={dataAlbuns} />
                ))}
            </ArtistContainerSytled >
        )

    } else {
        return (
            <Loading />
        )
    }

}

export default Artist