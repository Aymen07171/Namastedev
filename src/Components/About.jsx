    import { useAboutUser } from "../utils/useAboutUser";

    export const About = () => {

        const users = useAboutUser();

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            I am free to advertise the hunger of the airline players unless, who. This and the hateful element of the life of the life of the corporal has suspended it.
            </p>
            </div>
            <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
            {users.map((item) => (
                <li key={item.id}>
                <div className="flex items-center gap-x-6">
                    <img
                    className="h-16 w-16 rounded-full"
                    src={item.avatar_url}
                    alt=""
                    />
                    <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {item.login}
                    </h3>
                    {/* Uncomment below if 'role' is part of your data */}
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Developer </p>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };
