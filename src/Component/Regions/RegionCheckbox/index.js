import './index.scss'

const RegionCheckbox = ({name, setFilterRegion}) => {

  return (
    <div className={'checkbox'}>
      <input defaultChecked={true} onChange={(e) => {
        if (e.target.checked) {
          setFilterRegion(e => {
            delete e[name]
            return {...e}
          })
        } else {
          setFilterRegion(e => {
            e[name] = true
            return {...e}
          })
        }
      }} type="checkbox" className="checkbox__input" id={name} name={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default RegionCheckbox
