import { DotsVerticalIcon,  LocationMarkerIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import HeaderOption from './HeaderOption';


function HeaderOptions() {

    const icons = [
        {option: 'All', selected: true, Icon: SearchIcon},
        {option: 'Video', selected: false, Icon: PlayIcon},
        {option: 'Image', selected: false, Icon: PhotographIcon},
        {option: 'Maps', selected: false, Icon: LocationMarkerIcon},
        {option: 'News', selected: false,Icon: NewspaperIcon},
        {option: 'More', selected: false, Icon:  DotsVerticalIcon},
    ];
    return (
        <div className="flex justify-between mt-5">
            <div className="flex space-x-4 sm:space-x-6">
                {icons.map(item => <HeaderOption option_items={item} />)}
            </div>
            <div className="hidden flex space-x-4 sm:inline-flex">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
