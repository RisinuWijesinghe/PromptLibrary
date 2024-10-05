import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider'; 

export const metadata = {
    title: "PromptLibrary",
    description: "PromptLibrary is a library of prompts for creative writing, roleplaying, and more.",
}


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div classname="main">
                    <div classname="gradient" />
                </div>

                <main classname="app">
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;