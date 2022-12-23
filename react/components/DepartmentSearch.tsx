import React, { useState } from 'react'
import { useQuery } from 'react-apollo'

import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

const DepartmentSearch = () => {


  const { data, loading } = useQuery(QUERY_VALUE)

  const [searchUrl, setSearchUrl] = useState("");

  const CSS_HANDLES = [
    "container__search__department"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  console.log("mi slug seleccionado es: ", searchUrl)

  return loading
    ?
    <div>loading ... </div>
    :
    <div>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSearchUrl}
      />
      <SearchBar
        customSearchPageUrl={searchUrl}
        placeholder="¿Qué buscas?"
        displayMode="search-and-clear-buttons"
        className={handles.container__search__department}
      />
    </div>
}

export default DepartmentSearch;
