import { useRouter } from 'next/router'
import Head from 'next/head'
import { SearchIcon, MicrophoneIcon, XIcon, CogIcon } from '@heroicons/react/solid'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import { useState } from 'react';
import HeaderOptions from '../components/HeaderOptions';
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../response'
import SearchResult from '../components/SearchResult';



function Search({data}) {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState(router.query.q)
    // const search = searchTerm || router.query.q


    console.log(data)


    return (
        <div>
            <Head>
        <title>{ router.query.q} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <header className="flex justify-between py-3 px-10 bg-white border-b shadow-lg1 sticky top-0 pb-0">
                <div className="flex items-center sm:items-start flex-col w-full sm:flex-row sm:space-x-10">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" onClick={()=>router.push('/')} className="w-3/12 sm:h-8 sm:w-auto " />
                    <div className="w-11/12 mt-5 sm:mt-0 sm:w-7/12">
                        <div className="flex items-center border rounded-full p-3 shadow-md space-x-3">
                            <input type="text" value={ searchTerm } onChange={(e)=> setSearchTerm(e.target.value)} className="flex-grow outline-none ml-2" />
                            <XIcon className="h-6" onClick={() => setSearchTerm("")} />
                            <MicrophoneIcon className="h-5 mr-1 border-l-2 pl-2 text-blue-500"/>
                            <SearchIcon className="h-6 text-blue-500" />

                        </div>
                        <HeaderOptions />
                    </div>
               </div>
                <div className="">
                    <div className="hidden flex items-center sm:inline-flex space-x-3">
                    <CogIcon className="h-6" />
                    <div className="p-2 rounded-full hover:bg-gray-100">
                        <AppsIcon />
                    </div>
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4FWubJwy-bnclOnyQ4_jf1rFoHSX-lFFY6G6ps=s32-c-mo"/>
                </div>
                </div>
            </header>
            <SearchResult result={data} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;

    const result = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.q}`).then(response => response.json())

    return {
        props: {
            data: result
        }
    }


}
