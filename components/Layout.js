import Header from './Header'
import NavBar from './NavBar'


const Layout = ({children}) => {
    return (
        <div className="content">
            <Header />
            <NavBar />
            {children}
        </div>
    );
}

export default Layout;