const Layout = ({children}) => {
    return (
        <div>
            <header>
                <h2>My simple Blog</h2>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Copyright &copy; {new Date().getFullYear()}
            </footer>
        </div>
    )
}
export default Layout
