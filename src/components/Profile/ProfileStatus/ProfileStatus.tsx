import { ChangeEvent, useEffect, useState } from 'react';
import './profileStatus.css'

type ProfileStatusType = {
    status: string
    callBack: (newStatus: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = ({
    status, 
    callBack
}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(status)

    const callBackStarter = () => {
        if (value.trim() !== '') {
            callBack(value)
        }
    }

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        callBackStarter()
    }

    useEffect(() => {
        setValue(status)
        console.log('f')
    }, [status])

    return (
        <div>
            {
                editMode 
                ?
                <div className="status-input-wrapp">
                    <input type="text" onBlur={offEditMode} onChange={changeValue} value={value} autoFocus/>
                </div>
                : 
                <div className="status-span-wrapp">
                    <span onDoubleClick={onEditMode} >{status || 'Статус пуст'}</span>
                </div>
            }
        </div>
    );
};
