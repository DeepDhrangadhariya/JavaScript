function loadNavbar()
{
    const nav = 
    `
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Blog</a>
            <a href="">Contact Us</a>
        </nav>
    `

    document.getElementById("navbar").innerHTML = nav
}

function loadFooter()
{
    const foot = 
    `
        <h1>This Is Footer</h1>
    `

    document.getElementById("footerbar").innerHTML = foot
}

export{loadNavbar}
export{loadFooter}