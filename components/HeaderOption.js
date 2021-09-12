function HeaderOption({ option_items }) {
    const { option, Icon, selected } = option_items
    return (
        <div className={`flex items-center space-x-2 pb-2 ${selected && 'border-b-4 border-blue-500 text-blue-500'}`}>
            <Icon className="h-4"/>
            <p className="">{option}</p>
        </div>
    )
}

export default HeaderOption
