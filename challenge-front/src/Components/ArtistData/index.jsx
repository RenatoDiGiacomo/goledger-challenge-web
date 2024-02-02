import React from 'react'
import ArtistAlbuns from './ArtistAlbuns'
import {
    ArtistAboutContainerStyled,
    ArtistTitleStyled,
    ArtistAboutTextStyled,
    ArtistDataContainerStyled,
    ArtistActionsStyled,
    ArtistDeleteStyled,
    ArtistEditStyled
} from "./styled"

import { ReactComponent as Delete } from "../../Assets/SVG/delete.svg"
import { ReactComponent as Edit } from "../../Assets/SVG/edit.svg"
import DeleteModal from '../EditModal'


const ArtistData = ({ data, id, dataSongs, dataAlbuns }) => {
    const [modalDelete, setModalDelete] = React.useState(false)

    if (id === data["@key"]) {
        return (
            <>
                <ArtistAboutContainerStyled>

                    <ArtistActionsStyled>
                        <ArtistEditStyled onClick={() => setModalDelete(true)}>
                            <Edit />
                        </ArtistEditStyled>
                    </ArtistActionsStyled>

                    <ArtistTitleStyled>{data.name}</ArtistTitleStyled>
                    <ArtistAboutTextStyled>{data.about}</ArtistAboutTextStyled>
                    <ArtistDataContainerStyled>
                        <ArtistAlbuns dataAlbuns={dataAlbuns} dataSongs={dataSongs} setModalDelete={setModalDelete} modalDelete={modalDelete} />
                    </ArtistDataContainerStyled>
                </ArtistAboutContainerStyled>
                
            </>
        )
    }


}

export default ArtistData