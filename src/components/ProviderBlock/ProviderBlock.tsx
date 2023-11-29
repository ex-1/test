// ProviderBlock component
import ProviderAvatar from './ProviderAvatar'
import './ProviderBlock.scss'

export default function ProviderBlock() {
    return (
        <section className='provider-block block'>
            <div className="wrapper provider-data-wrapper">
                <ProviderAvatar imgURL='/assets/avatar.svg' />
                <div className="wrapper provider-data__info-wrapper">
                    <span className="provider-data__name">Sergey Kovalev</span>
                    <span className="provider-data__mail">skovalev@allforoil.ae</span>
                </div>
            </div>
            <button className="btn organization-btn active">
                <img src="/assets/factory.svg" alt="factory" />
                <span>Организация</span>
            </button>
            <button className="btn blacklist-btn">
                <img src="/assets/prohibit.svg" alt="prohibit" />
                <span>Черный список</span>
            </button>
        </section>
    )
}