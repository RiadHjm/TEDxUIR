import Logo from './Logo'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900 mt-10" >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/">
                                <Logo></Logo>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-32 sm:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-redLogo uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Volounteer</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Discover</a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:underline">ParXners</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-redLogo uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div>
                                <h2 className="mb-6 text-sm font-semibold text-redLogo uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"><span className='text-redLogo font-extrabold'>TEDx</span>UIR</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO2WMQrCUAyGOzgLTRBcPIWJuOkg4uhxnMTVC7h6BA/gBRwUPYAu1UQcVBBHoVLFUkSEavuq8H7IEh7Jl5e8RxzHyuoXpey2lHCtjH5C5gUxYwCgl2DyECIOgB/Yhxf4fTz9NwC/5uSEsaMEUyXcK+FBGWbGAIRg8NxzIdgaAdhxoSiElzAxw1kYVsI4MQIgFWhGKj961Tx8E+8DAGyHAASLV2dMAsyNASjBSBnHQdWRwTvdfHd/P10AxuO7n08Ih9kCMPZSBdiWsb4haChBN/IEl4Hvbm4pVYDMh/AhCyC2BZV0htDLeCVzWwlDxFtKrawcg7oCPPcMn3Bv0t4AAAAASUVORK5CYII=" />
                            </a>

                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACQklEQVR4nO2WzWoUQRDHm0TjSdetWgT1opJTLiJdNYom+giJQl5Co2dNfAo/ok+g5jUCmghRPESjXkSxekXFQ4y3lZGaqVnDsrM7M9lFD1vQMMzMv+rX1VXd7dzIRva/W+DGRSFcEYYgjL8DY9xrpP+AJJqoMVM5cOzdfmF42C9gXyCCB+qrNIBYcGH4KYw3m2drJ2LnxvqCOzfWjGonhWBRGHYMYrl02oMFD4xUmj7zQ8htCF+fLiwUwhUjv1UpMONd8bCQPsNSuhzwuDgAQ1CRpr3z2/vJyQPCcF0Y13V2ySBc04CbU24iCUqwGgjv6PMXOnIqASD8XByAsKWieN6N737/6RwcDwSv8osOXn48g8d2a9RHmk1sFQYI5rBz5llwIXwtHme/nceDOiTCucCwZRAvskz08lcaQBhuWPA3P3y91qnRdxlEk/DaEADweVrNOJunE4bLBrk2BADQlow15Xm67xEcsu7ZHjwAwXY/gHQZhgXAuJ44j3AuV0dwxVru2eABPCxYlW91K8IPp2uHA8E7A7g6cIDNKTehfW4Qb7XgdM2TddeZt4PDRufhUxpAcjYi3WT+QnQZBBtffePonjci6bEVaya0z3Wd05My6Y6nmvZux26lrTgwPrFqXiwsyvUFty07jwqLJGrM2HG8o0dq1eBND1Fg+GXH8YVSYiFYbkMwLOklo9CFZN6Np2nXmVtwhvul6eNLbl8GsacrGcM99eWqmvj6tF4mtIiy7uh9B8SW/qua0mkf2cjcP7A/6Z0aX+QJ1VgAAAAASUVORK5CYII=" />
                            </a>

                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVR4nO2WP2gVQRDG14ggisH3zcUQESzSK7ozZ/BPVLARxC6FNipYiYhiqQgKsbMwhYhYCVoIVlppqZYWglqIEH15M+fTNP4lIHKyL3mxiI+3l7vO+2Cr253vtzN7s+tcrVq1KlKW0n5j3DKhx8a4q0JH8wm3svt9NsVgc2wQUcFajBNtPzQaMzd3bsCYbptQ/o/xvMV02JimjOnl9N7Nq6MAlOm1CTVjIIxxqYf54lCmL+obu2bS9VujAEzwY34xNPO0ryeoH1mjgu99AQTvlNEOZYoEoObfxfQ71PaTT0aWzkvG+5kvAHwzbhyMMg9Sxo2lgTCngjuZJIc+76R1YV6LcSAKgOmaK6IP22ijMc323lEnK29N8CIGwAQXo81z5waU6b4xXVemX3EG/UrQOFkoA8r0qgrjRYA02VMIwATHKjNnfM29W1UIIO80F9yrJv30oJB5V7lzK5RxVpmmy0Ek4245+rhjw7AyvQkpLAHw1JWRCU0u3xxz6pPtpQDyThnoSghWGMDjnKtKMyk2qeCMMX7GHTzcDPCVmGdbhtca0yllZJG7v1rKXH1jt3qcVqHLyngUewjnbztMlN5xHlqxT46Y0LPI//y9CS50L6hK1fZDo5ngeHjRhIZiQk+U8XDhBXTehDgAV25cq9Z/pT8VXaCmh/IlBgAAAABJRU5ErkJggg==" />
                            </a>

                            <a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACMElEQVR4nO2WO28TQRDHtyBIoQDfzFEgWaHj4Ug8dDNnF5GCUAQIPgPUkA+AIiFa+ABAwKQkhg8RElFQUkJESj92riJQ8iiMZndNkM6OHcuOkfBIK612dmd+d7uz+zdmalPrYo3KccjS+JYQLgvBYyGoWYZ3QvBBCHaEsS6Eu5bwlzbt+zHY0Tlhbs2vxWWNpTFNP7PJqWOW4YULytgeZfOw8LxRKc72BBCGN34BfBeCt0K4JgwPJYU7WYpXpRwnLcKzNonm6gsnovaiOaJN+zrW4viMzskSvCKEt4XhgTBUhXHDxdTYBLWuyVt88lKg/SplOG9GbBlH85bxm+ZolgsXchMs40oAeDLq5Hs54JnbjhTv55zifrcDuDsuAHeo/RZX83QEm54Oru0bhPF9i2BpKACOboSP3OgCgNvOmUKpD4A/1a7U4sUDAaRQChXxKe8kbLoDkkJxEIC/2sB/RCslrKl3A9hVp5bUAQEGBtHLyJcifsnTMf5UZzsxM0MC9AX5WDJHw5wf/x6ATHoL5HAPYWMiZZhxNB/KcHvoi8gOkXhvbXTdA8DmZK9igpc9HyPL8HRcABrb58CVnLOZFi52nmPdq0N/jtWE4PUfQeJFRLUjSPSkq9iwCZ6Ty4XTTpAkZkab9nXM+ZxogSVd49bmBcm66WWNSnHWEqx2LqUxSLLVfSVZTpQy3guidN0SbDlRyvC5pyhVn4pSgi3L8EoYH7kYSXxzIFE6tan9l/YbTOs+yfXKNjcAAAAASUVORK5CYII=" />
                            </a>

                            <a href="/">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WvU7DMBDHjWDoFGRfAQkJKt4AFF8EdMjCxA4vwsBT8AI8BWxtGUBiZOMFqqL4slSFDTKA0Ym2pJUqkS+DUP7SDXfKXX72Oc4JUavWX5Tx5TYh9AghIQRb0LhGj2v+GIAQbkp48axp6GYBSDjpad9ToqC4xheEessCYNkm/jBQnvFlux+2Gnkg5utlShgGyiOEAftGqwd7IpadAhhfttO9HOzBplOAfthq8MrHfby2Qiw5BWDxtudZeWkABuGcjRDO2I8PNtanMb95HAerO0bDBaG6Iq0uIy0PSwWg6besXtmPcG03dS7uScMofU4Mwnuk1ZErADu+aEaLLp5KAQzCB+lmyPEY5el3XJErgMfJczYUK6n/R+IIQN2lcw3Cy6L8qgBu53KfawD6dy0oqjwAyW8PJL1SxrDZm7GTbSjV0C1tKNXQibTcyrmJtWqJSvUJTBRY/iucVAcAAAAASUVORK5CYII=" />
                            </a>
                            
                            

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer