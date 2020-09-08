import React from 'react'
import {SectionItem} from '../SectionItem'

export default function SectionList(){

    //Trong lifecycle get api lấy danh sách post về
    //truyền từng post vào trong props của sectionitem
    return (
        <div className="ass1-section__list">
            <SectionItem/>
        </div>
    )
}