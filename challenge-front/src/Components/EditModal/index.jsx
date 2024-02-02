import React from 'react'
import {
    ModalOverlayStyled,
    ContainerStyled,
    TitleSytled,
    TextStyled,
    BtnContainer,
    CancelBtnStyled,
    AcceptBtnStyled
} from './styled'
import UseRequestApi from '../../Api/api'

const EditModal = ({ dataAlbuns, dataSongs, name, id, modalDelete, setModalDelete }) => {
    const {  DeleteArtist, DeleteSong, DeleteAlbum, } = UseRequestApi()

    const handleDelete = () => {
        // setModalDelete(false)
        // DeleteArtist(name, id)
    }

    return (
        <ModalOverlayStyled modalDelete={modalDelete}>
            <ContainerStyled>
                <TitleSytled>
                    Do you like delete this Artist?
                </TitleSytled>
                <TextStyled>
                    This action can't be undone!
                </TextStyled>
                <BtnContainer>
                    <AcceptBtnStyled onClick={handleDelete}>
                        Yes
                    </AcceptBtnStyled>
                    <CancelBtnStyled onClick={() => setModalDelete(false)}>
                        Cancel
                    </CancelBtnStyled>
                </BtnContainer>
            </ContainerStyled>
        </ModalOverlayStyled>
    )
}

export default EditModal