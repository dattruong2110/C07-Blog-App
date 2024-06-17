import React from "react";

const Table = ({columns = [], data = [], title, subTitle}) => {
    const Search = () => {
        return (
            <>
                <form>
                    <div
                        className="px-4 py-2 flex gap-2 items-center justify-center text-sm text-gray-900 bg-gray-50 rounded focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                        <div className="flex items-center pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full bg-inherit focus:outline-none"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </>
        );
    };

    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-11/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap gap-4 items-center">
                            {title && (
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-2xl text-blueGray-700">
                                        {title}
                                    </h3>
                                </div>
                            )}
                            <Search/>
                            {subTitle && (
                                <p className="text-sm text-blueGray-400 font-light">
                                    {subTitle}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="block w-full h-[85vh] overflow-x-auto">
                        <table className="items-center w-full border-collapse text-blueGray-700">
                            <thead className="thead-light">
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    >
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                        >
                                            {column.render
                                                ? column.render(row)
                                                : row[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Table;
