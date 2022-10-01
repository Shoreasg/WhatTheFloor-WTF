import { SocialIcon } from 'react-social-icons';

const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ]

const CollectionsDetails = ({ CollectionsDetails }: any) => {

    return (
        <div className="flex justify-center h-auto w-auto">
            <div className=" rounded-lg bg-white shadow w-3/4">
                <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                                <img className="mx-auto h-40 w-40 rounded-full" src={CollectionsDetails.profileImageUrl} alt="" />
                                <div className="mt-4 text-center sm:pt-1">
                                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">{CollectionsDetails.collectionsName}</p>
                                    <p className="text-xs font-bold text-gray-900 sm:text-sm">Token Address:</p>
                                    <p className="text-xs font-bold text-gray-900 sm:text-sm mb-3">{CollectionsDetails.tokenAddress}</p>
                                    {CollectionsDetails.twitterUrl && CollectionsDetails.twitterUrl.includes("twitter") ? <><SocialIcon url={CollectionsDetails.twitterUrl} network="twitter" style={{ height: 25, width: 25, marginRight: 2 }} /></> :
                                        ""}
                                    {CollectionsDetails.discordUrl && CollectionsDetails.discordUrl.includes("discord") ? <><SocialIcon url={CollectionsDetails.discordUrl} network="discord" style={{ height: 25, width: 25, marginRight: 2 }} /></> :
                                        ""}
                                    {CollectionsDetails.telegramUrl && CollectionsDetails.telegramUrl.includes("t.me") ? <><SocialIcon url={CollectionsDetails.telegramUrl} network="telegram" style={{ height: 25, width: 25, marginRight: 2 }} /></> :
                                        ""}
                                    {CollectionsDetails.websiteUrl && CollectionsDetails.websiteUrl !=="NA" ? <><SocialIcon url={CollectionsDetails.websiteUrl} label="website" style={{ height: 25, width: 25, marginRight: 2 }} /></> :
                                        ""}
                                </div>
                                <div className='flex justify-center'>
                                    <button className='px-5 py-1 mt-2 font-semibold text-sm bg-[#29CCC4] text-white rounded-full shadow-sm' onClick={() => window.open(`https://viewblock.io/zilliqa/address/${CollectionsDetails.tokenAddress}`)}>Viewblock</button>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-900 sm:text-s mt-2">{CollectionsDetails.description}</p>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>
                                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                                    {stats.map((item) => (
                                        <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CollectionsDetails