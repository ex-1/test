// ProviderAvatar component

export default function ProviderAvatar(
    { imgURL }: { imgURL: string }
) {
    return (
        <div className="provider-data__avatar-warpper">
            <img src={imgURL} alt={imgURL} className="provider-data__avatar" />
        </div>
    )
}