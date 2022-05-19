import './index.scss'

const Pagination = ({numberPage, activePage, setActivePage}) => {
  const pages = [];
  for (let i = activePage - 3 < 0 ? 1 : activePage - 3; i <= (activePage + 3 > numberPage ? numberPage : activePage + 3); i++) {
    pages.push(<div onClick={() => setActivePage(i + 1)}>{i}</div>)
  }

  return (
    <div className="pagination">
      <div onClick={() => {setActivePage(activePage - 1)}} className="pagination__arrow pagination__arrow-prev ">Pred</div>
      <div onClick={() => setActivePage(1)}>1</div>

      {pages}

      <div onClick={() => setActivePage(numberPage - 1)}>{numberPage}</div>
      <div onClick={() => {setActivePage(activePage + 1)}} className="pagination__arrow pagination__arrow-next">Next</div>
    </div>
  )
}

export default Pagination
