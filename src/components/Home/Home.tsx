// Home component
import ClientForm from '../ClientForm/ClientForm'
import ReduxProvider from '../ReduxProvider/ReduxProvider'
import './Home.scss'

export default function Home() {
    return (
        <ReduxProvider>
            <main className="home-wrapper">
                <div className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <ClientForm />
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            </main>
        </ReduxProvider>
    )
}