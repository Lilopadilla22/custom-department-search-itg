import React, { useState } from 'react'
import { useQuery } from 'react-apollo'

import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {


  const { data, loading } = useQuery(QUERY_VALUE)

  const [slug, Setslug] = useState("");

  console.log("mi slug seleccionado es: ", slug)

  console.log("mis datos de query:", data?.categories[0].children)

  return loading
    ?
    <div>loading ... </div>
    :
    <div className='flex'>
      <DepartmentGroup departments={data?.categories[0].children}
        handleSetSlug={Setslug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder= "¿Qué buscas?"
        displayMode= "search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch;
