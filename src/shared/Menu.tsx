import Menu from './Styles/Menu-Styled'

const MenuComponent = (props: any) => {
    const pages = ['About', 'Experience', 'Work', 'Contact']

    const menuElem = pages.map((page, i) => {
        return (
            <p className="page-title" key={`${page}-${i}`}>
                <span className="page-index">0{i}.</span>{page}
            </p>
        )
    })

    return (
        <Menu>
            <div className="pages-wrapper">
                {menuElem}
            </div>
        </Menu>
    )
}

export default MenuComponent