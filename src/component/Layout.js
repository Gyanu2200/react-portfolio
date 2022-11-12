import React from 'react'

export const Layout = ({children}) => {
  return (
    <>
    {children}
        <footer class="bg-dark text-light p-5 text-center mt-5">
      Copyright &copy; All right Reserved. Made with 💖 by me 
    </footer>

    {/* <!-- arrow up --> */}
    <a href="#nav-bar" id="go-up"><i class="fa-solid fa-arrow-up"></i></a>
    </>
  )
}
