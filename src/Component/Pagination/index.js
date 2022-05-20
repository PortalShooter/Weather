import './index.scss'

const Pagination = ({numberPage, activePage, setActivePage}) => {

  const pages = [];

  for (let i = activePage - 3 <= 0 ? 1 : activePage - 3; i <= (activePage + 3 > numberPage ? numberPage : activePage + 3); i++) {
    const classActive = activePage === i ? 'pagination__item_active' : ''
    pages.push(<li key={i} className={`pagination__item ${classActive}`} onClick={() => setActivePage(i)}>{i}</li>)
  }

  return (
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination
