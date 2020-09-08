import React from 'react'
import {PATHS} from '../../constants'
import {Link} from 'react-router-dom'

export default function SectionItem(){
    return(
        <div className="ass1-section__item">
                <div className="ass1-section">
                    <div className="ass1-section__head">
                        <Link to={PATHS.USER_DETAIL} className="ass1-section__avatar ass1-avatar"><img src="/images/avatar-02.png" alt="" /></Link>
                        <div>
                        <Link to={PATHS.USER_DETAIL} className="ass1-section__name">Thanos</Link>
                        <span className="ass1-section__passed">2 giờ trước</span>
                        </div>
                    </div>
                    <div className="ass1-section__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                        deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                        amet a ad suscipit laudantium unde quidem perferendis!</p>
                        <div className="ass1-section__image">
                        <Link to={PATHS.POST_DETAIL} ><img src="https://cdn1.tuoitre.vn/zoom/600_315/2020/5/26/scene-from-avatar-2009-001-1590469520402763324186-crop-15904695923421456821397.jpg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="ass1-section__footer">
                        <Link to={PATHS.POST_DETAIL}><i className="icon-Comment_Full" /><span>982</span></Link>
                    </div>
                </div>
        </div>
    )
}