import React from 'react';
import { useDispatch } from 'react-redux'
import { createSector } from '../../Redux/actions'


//Handler Formulario Sector
export function CreateSectorHandler () {
    const dispatch = useDispatch();
    async function handleCreateSector(payload){
        try {
            await dispatch (createSector(payload));
        } catch (error) {
            console.error("Error al crear el sector", error)
        }
    }
    return handleCreateSector
}
