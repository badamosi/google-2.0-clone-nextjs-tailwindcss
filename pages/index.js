import Head from 'next/head'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import Image from 'next/image'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import { useState } from 'react';




export default function Home() {

  const [searchInput, setSearchInput] = useState("")

  const router = useRouter();
  
  const handelSubmit = (e) => {
    e.preventDefault();
    searchInput && router.push({
      pathname: "/search",
      query: {
        q:searchInput
      }
    });
  }

  return (
    <div className="">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col space-y-6 h-screen justify-between">
        <div className="flex items-center justify-end p-6 space-x-6 w-screen h-16">
            <div className="flex space-x-4">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
            </div>
          <div className="flex items-center space-x-6">
            <div className="p-2 rounded-full hover:bg-gray-100">

                <AppsIcon />
            </div>
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4FWubJwy-bnclOnyQ4_jf1rFoHSX-lFFY6G6ps=s32-c-mo"/>
            </div>
        </div>
        <div className="flex items-center flex-col flex-grow">
          
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="h-24 max-w-lg mt-20" />
          <form onSubmit={(e)=> handelSubmit(e)} className="flex flex-col items-center">
            <div className="flex items-center justify-between border p-2 rounded-full min-w-[500px] sm:w-[650px] hover:shadow-lg space-x-2 mt-8">
              <SearchIcon className="searchbar-icons" />
              <input type="text" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className="flex-grow outline-none" placeholder="Start your search" />
              <MicrophoneIcon className="searchbar-icons"/>
            </div>
          <div className="flex space-x-4 my-7 box-border">
            <button type="submit" className="btn">Google Search</button>
            <button type="reset" className="btn">I'm Feeling Lucky</button>
          </div>
          </form>
          
          <div className="flex space-x-4">
            <p className="text-sm">Google offered in:</p>
            <p className="languages language_deco">Hausa</p>
            <p className="languages language_deco">Igbo</p>
            <p className="languages language_deco">Èdè Yorùbá</p>
            <p className="languages language_deco">Hausa</p>
            <p className="languages language_deco">Nigerian Pidgin</p>  
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="py-3 px-10 border-b">
            <p className="text-gray-700">Nigeria</p>
          </div>
          <div className="flex justify-between py-3 px-10">
            <div className="flex space-x-6">
              <p className="footer-link">About</p>
              <p className="footer-link">Advertising</p>
              <p className="footer-link">Business</p>
              <p className="footer-link">How Search works</p>
            </div>
            <div className="flex space-x-6">
              <p className="footer-link">Privacy</p>
              <p className="footer-link">Terms</p>
              <p className="footer-link">Settings</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
