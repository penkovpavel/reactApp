import React, {useState} from "react";
import {Input, Select} from "antd";
import "./styles.scss";
import UserSearchResult from "../components/search/UserSearch";
import RepositorySearch from "../components/search/RepositorySearch";
const {Option} = Select;

function Search() {
    let [searchType, setSearchType] = useState('repository');
    let [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>SEARCH</h1>
            <div className="search-container">
                <Input className="search-input" value={searchTerm}
                       onChange={(event) => setSearchTerm(event.target.value)} placeholder={searchType}/>
                <Select
                    value={searchType}
                    onChange={value => setSearchType(value)}
                    className="mb-10 search-select"
                >
                    <Option value="repository">Repositories</Option>
                    <Option value="user">Users</Option>
                </Select>
            </div>
            {
                searchType === 'repository' ?
                    (<RepositorySearch query={searchTerm}/>) :
                    (<UserSearchResult login={searchTerm}/>)
            }
            
        </div>
    )
}

export default Search;