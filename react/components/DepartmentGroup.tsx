import React from "react";

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string,
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("mi grupo de departamentos es: ", departments);

  const onHandlesSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }
  const deparmentOpcion: any = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })
  return (
    <select
      onChange={onHandlesSetSlug}
      defaultValue="value0">
      <option disabled value="value0"> Seleccione una opcion</option>
      {deparmentOpcion}
    </select>
  )

}

export default DepartmentGroup
