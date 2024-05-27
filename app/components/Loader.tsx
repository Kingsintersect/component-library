<>
    {/* Navbar */}
    <nav className={styles.nav}>
        {/* Flex container */}
        <div className={styles.nav_large_container}>
            {/* Logo */}
            <Link href={"/"} onClick={() => setSelectedIndex(1000000)} className={`${selectedIndex == 1000000 ? styles.active : ''}`}>
                <div className={styles.logo_container}>
                    <BeakerIcon className="size-6 text-blue-500" />
                    {/* <img src={imageSrcPath} alt="c" className='w-36 h-fit' /> */}
                    <span>{brandName}</span>
                </div>
            </Link>
            {/* meni items */}
            <div className={styles.navmenu_container}>
                {navList}
            </div>
            {/* Menubuger Icon */}
            <button onClick={() => setOpenNav(!openNav)} className={styles.menu_btn} id='menu_btn'>
                {!openNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${!openNav ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${openNav ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative z-40">
            <div id="menu" className={`${openNav ? ' flex flex-col items-center animate-fadeIn ' : ' animate-fadeOut hidden '} ${styles.mobile_menu_container}`}>
                {navList}
            </div>
        </div>
    </nav>
</>