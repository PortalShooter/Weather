import './index.scss'

const Pagination = ({numberPage, activePage, setActivePage}) => {

  const pages = [];
  for (let i = activePage - 3 <= 0 ? 1 : activePage - 3; i <= (activePage + 3 > numberPage ? numberPage : activePage + 3); i++) {
    const classActive = activePage === i ? 'pagination__item_active' : ''
    pages.push(<div className={`pagination__item ${classActive}`} onClick={() => setActivePage(i)}>{i}</div>)
  }

  return (
    <div className="pagination">
      {pages}
    </div>
  )
}

export default Pagination
