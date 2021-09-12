function SearchResult({result}) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-44">
            <p className="text-gray-600 text-md mb-5 mt-3">About {result.searchInformation?.formattedTotalResults} results ({result.searchInformation?.searchTime})</p>
            
            {result.items?.map(item => (
                <div key={item.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={item.link} className="text-sm">{item.formattedUrl }</a>
                        <a href={item.link}>
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{item.title }</h2>
                        </a>
                    </div>
                    <p className="">{item.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResult
