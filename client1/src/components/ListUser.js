const ListUser = (props) => {
    return (
        <div className="cart" class="grid grid-cols-3">
            <div class="overflow-x-auto relative col-start-2 col-span-1 h-screen ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="border-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Lastname
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Firstname
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-2  overflow-auto">
                        {props.actors.map((person, index) => (
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {person.firstName}
                                </th>
                                <td class="py-4 px-6">
                                    {person.lastName}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListUser;