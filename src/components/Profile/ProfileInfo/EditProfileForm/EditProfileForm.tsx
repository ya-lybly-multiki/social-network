import React, {ChangeEvent} from 'react'
import s from '../ProfileInfo.module.css'
import {ProfileType, saveProfile} from "../../../../Redux/Profile-reduser";
import {useForm} from "react-hook-form";

import {useDispatch} from "react-redux";

type TEditProfileFormProps = {
    profile: ProfileType | null
    setEditProfile: (editProfile: boolean) => void
    savePhoto: (file: File) => void
}

type FormDataType = {
    aboutMe:string
    lookingForAjob:string
    jobDesc:string
    myName:string
}
export const EditProfileForm =((props:TEditProfileFormProps) => {

    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    const dispatch = useDispatch()

    function onSubmit(data:ProfileType) {
        dispatch(saveProfile(data))
        props.setEditProfile(false)
    }

    const { register,  handleSubmit } = useForm<FormDataType>({
        mode:"all"
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.aboutMe}><b>Change avatar:</b>
                <label className={s.changeAvatar} htmlFor={'i1'}>
                    Choose avatar
                    <input type="file"
                           id={'i1'}
                           style={{width: 0}}
                           placeholder={'choose ava'}
                           onChange={onChangeAvatar}/>
                </label>
            </div>
            <div className={s.aboutMe}><b>About me:</b>
                <input  {...register("aboutMe", { required: true})} />
            </div>
            <div className={s.aboutMe}><b>Looking for a job:</b>
                <input type={"checkbox"} {...register("lookingForAjob")}/>
            </div>
            <div className={s.aboutMe}><b>Job description:</b>
                <input  {...register("jobDesc", { required: true})} />
            </div>
            <div className={s.aboutMe}><b>My name:</b>
                <input  {...register("myName", { required: true})} />

            </div>
            <button type={'submit'} className={s.editProfileBtn + ' ' + s.editMode}

            >Save</button>
            <button type={'button'} className={s.editProfileBtn + ' ' + s.editMode}
                    onClick={() => props.setEditProfile(false)}>Cancel
            </button>
        </form>
    )
})