// Home component
import ClientForm from '../ClientForm/ClientForm'
import FromNextStep from '../FormNextStep/FromNextStep'
import ProviderBlock from '../ProviderBlock/ProviderBlock'
import SupportBlock from '../SupportBlock/SupportBlock'
import './Home.scss'
import PathToPage from './PathToPage'

export default function Home() {
    const pathToPage = [
        { name: 'Маркет', href: "/market" },
        { name: 'Личный кабинет', href: "/lk" },
    ]

    return (
        <main className="home-wrapper">
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home__header">
                                <PathToPage path={pathToPage} />
                                <div className="home__title-wrapper">
                                    <h1 className="home__title">Личный кабинет</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="home__fst-block">
                                <ProviderBlock />
                                <SupportBlock />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="forms-slice">
                                <ClientForm />
                                <FromNextStep title='Реквизиты и контакты' />
                                <FromNextStep title='Условия выплат и документооборот' />
                                <FromNextStep title='Договоры' />
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}