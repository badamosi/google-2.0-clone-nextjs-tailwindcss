import { ViewGridIcon } from '@heroicons/react/solid'
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className="flex items-center justify-end p-6 space-x-6 w-screen h-16">
            <div className="flex space-x-4">
                <p className="link">Gmail</p>
                <p className="menu_link">Images</p>
            </div>
            <div className="flex items-center space-x-6">
                <AppsIcon />
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4FWubJwy-bnclOnyQ4_jf1rFoHSX-lFFY6G6ps=s32-c-mo"/>
            </div>
        </div>
    )
}

export default Header
