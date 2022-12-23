import React, { ChangeEvent } from "react";

import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  departments: Category[],
  handleSetSlug: (slug: string) => void
}

type Category = {
  id: number,
  name: string,
  slug: string,
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  const onHandlesSetSlug = (event: ChangeEvent<HTMLSelectElement>) => {
    handleSetSlug(`/${event.target.value}/$\{term\}&map=ft`)
  }

  const CSS_HANDLES = [
    "container__select__search",
    "label__select__search"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const deparmentOpcion: Array<JSX.Element> = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })
  return (
    <select
      onChange={onHandlesSetSlug}
      defaultValue="value0"
      className={handles.container__select__search}
    >
      <option disabled value="value0" className={handles.label__select__search}>
        Escoge tu departamento fav
      </option>
      {deparmentOpcion}
    </select>
  )

}

export default DepartmentGroup
