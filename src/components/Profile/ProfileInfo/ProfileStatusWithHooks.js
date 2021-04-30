import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [
        // props.status
    ]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChangeHandler = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Статус: </b><span onDoubleClick={activateEditMode}>{props.status || 'нет статуса'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <b>Статус: </b><input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChangeHandler} />
                </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;