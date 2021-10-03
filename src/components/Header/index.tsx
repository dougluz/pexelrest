import React from "react";
import { PhotosContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";
import * as S from './styles'

type Event = React.ChangeEvent<HTMLInputElement>

const Header = () => {
  const { search, setSearch } = React.useContext(PhotosContext)
  const [displayValue, setDisplayValue] = React.useState(search)
  const debounceChange = useDebounce(setSearch, 500)

  const handleSearchChange = (event: Event) => {
    setDisplayValue(event.target.value)
    debounceChange(event.target.value)
  }

  return (
    <S.Header>
      <S.Input value={displayValue} onChange={handleSearchChange} placeholder="Search" />
    </S.Header>
  )
}

export default Header
