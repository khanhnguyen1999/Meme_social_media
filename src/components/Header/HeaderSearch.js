import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {PATHS} from '../../constants'

export default function HeaderSearch(){
    const [querySearch,setQuerySearch] = useState('')
    const history = useHistory()
    const handleSearch = (e)=>{
        setQuerySearch(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`${PATHS.SEARCH_RESULT}?q=${querySearch}`)
    }
    return (
    <div className="ass1-header__search">
        <form onSubmit={handleSubmit}>
          <label>
            <input onChange={handleSearch} value={querySearch} type="search" name="search-text" className="form-control" placeholder="Nhập từ khóa ..." />
            <i className="icon-Search" />
          </label>
        </form>
    </div>
    )
}