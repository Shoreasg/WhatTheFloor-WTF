const MarketPlace_NavBar = () => {

    const tabs:{name: string, href: string, current: boolean, disable: boolean}[] = [
        { name: 'Arky', href: '#', current: true , disable: false},
        { name: 'Zilkroad (Coming Soon)', href: '#', current: false , disable: true},
        { name: 'Cathulu.tools (Coming Soon)', href: '#', current: false , disable: true},
        { name: 'Rialto (Coming Soon)', href: '#', current: false , disable: true},
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div>
            <div className="sm:hidden mt-5">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"

                >
                    {tabs.map((tab) => (
                        <option key={tab.name} disabled={tab.disable}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block mt-4">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500',
                                    'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )

}

export default MarketPlace_NavBar