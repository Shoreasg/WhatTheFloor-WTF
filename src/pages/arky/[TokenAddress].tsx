import { NextPage } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'
import CollectionsDetails from '../../components/CollectionsDetails'
import Body from '../../components/Layout/Body'
import { trpc } from '../../utils/trpc'

const TokenAddress: NextPage = () => {
    const router = useRouter()

    const tokenAddress = router.query.TokenAddress as string

    const { data } = trpc.useQuery(['getArky.getTokenAddress', { tokenAddress }])

    if (!data) {
        return <Error statusCode={404} />
    }

    // console.log(router)

    console.log(data)

    return (
        <Body>
            <CollectionsDetails CollectionsDetails={data} />
        </Body>
    )
}

export default TokenAddress