import numabbr from 'numabbr'
import BigNumber from "bignumber.js"

const Table = (arkyCollections: any) => {

  const mapArkyCollections = arkyCollections.arkyCollections?.map((data: any) => {

    const allTimeVolumeBN = new BigNumber(data.allTimeVolume).shiftedBy(-12);
    const sevenDayVolumeBN = new BigNumber(data.sevenDayVolume).shiftedBy(-12);



    return (
      <tr key={data.id}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6 w-1/4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={data.profileImageUrl === "NA" ? "/WTF_logo_only.png" : data.profileImageUrl} alt="" />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">{data.collectionsName}</div>
              <div className="text-gray-500">{data.tokenAddress}</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
          <div className="text-gray-900">{data.isVerified ? <span className="inline-flex rounded-full bg-green-400 px-2 text-xs font-semibold leading-5 text-black">
            Verified
          </span> : <span className="inline-flex rounded-full bg-red-400 px-2 text-xs font-semibold leading-5 text-black">
            {data.isScam || data.collectionsName.includes("⚠️") ? "Scam" : "Not Verified"}
          </span>}</div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-black text-center font-semibold">
          {numabbr(sevenDayVolumeBN.toNumber())} ZIL
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-black text-center font-semibold">
          {numabbr(allTimeVolumeBN.toNumber())} ZIL
        </td>
      </tr>)
  })

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900 text-center mt-10">Arky MarketPlace</h1>
          <p className="mt-2 text-xl text-gray-700 text-center">
            List of NFT collections that are listed on Arky. Remember to DYOR!
          </p>
        </div>
      </div>
      {mapArkyCollections ?
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Collection Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                        Verified by Arky
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                        7 day Volume
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center">
                        All Time Volume
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {mapArkyCollections}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> : <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 animate-pulse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>
                        Loading
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {mapArkyCollections}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Table